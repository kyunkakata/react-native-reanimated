#pragma once

#include <jsi/jsi.h>
#include <stdio.h>
#include <memory>
#include <string>
#include <tuple>
#include <unordered_map>
#include <utility>

using namespace facebook;

namespace reanimated {
namespace jsi_utils {

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, double>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count);

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, int>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count);

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, bool>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count);

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, jsi::Object>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count);

template <typename T, typename... Rest>
inline typename std::enable_if<
    std::is_same<T, jsi::Value const &>::value,
    std::tuple<T, Rest...>>::type
pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count);

template <typename T, typename... Rest>
inline typename std::enable_if<
    std::is_same<T, jsi::Runtime &>::value,
    std::tuple<T, Rest...>>::type
pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count);

template <typename... Targs>
std::enable_if_t<(sizeof...(Targs) == 0), std::tuple<>>
pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  assert(count == 0);
  return std::make_tuple();
}

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, double>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  assert(count > 0);
  auto arg = std::make_tuple<double>(args->asNumber());
  auto rest = pushArgTypes<Rest...>(rt, std::next(args), count - 1);
  return std::tuple_cat(std::move(arg), std::move(rest));
}

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, int>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  assert(count > 0);
  auto arg = std::make_tuple<int>(args->asNumber());
  auto rest = pushArgTypes<Rest...>(rt, std::next(args), count - 1);
  return std::tuple_cat(std::move(arg), std::move(rest));
}

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, bool>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  assert(count > 0);
  auto arg = std::make_tuple(args->asBool());
  auto rest = pushArgTypes<Rest...>(rt, std::next(args), count - 1);
  return std::tuple_cat(std::move(arg), std::move(rest));
}

template <typename T, typename... Rest>
inline typename std::
    enable_if<std::is_same<T, jsi::Object>::value, std::tuple<T, Rest...>>::type
    pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  assert(count > 0);
  auto arg = std::make_tuple(args->asObject(rt));
  auto rest = pushArgTypes<Rest...>(rt, std::next(args), count - 1);
  return std::tuple_cat(std::move(arg), std::move(rest));
}

template <typename T, typename... Rest>
inline typename std::enable_if<
    std::is_same<T, jsi::Runtime &>::value,
    std::tuple<T, Rest...>>::type
pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  auto arg = std::tie(rt);
  auto rest = pushArgTypes<Rest...>(rt, args, count);
  return std::tuple_cat(arg, std::move(rest));
}

template <typename T, typename... Rest>
inline typename std::enable_if<
    std::is_same<T, jsi::Value const &>::value,
    std::tuple<T, Rest...>>::type
pushArgTypes(jsi::Runtime &rt, const jsi::Value *args, const size_t count) {
  auto arg = std::tie(std::as_const(*args));
  auto rest = pushArgTypes<Rest...>(rt, std::next(args), count - 1);
  return std::tuple_cat(arg, std::move(rest));
}

template <typename Ret, typename... Args>
std::tuple<Args...> getArgsForFunction(
    std::function<Ret(Args...)> function,
    jsi::Runtime &rt,
    const jsi::Value *args,
    const size_t count) {
  return pushArgTypes<Args...>(rt, args, count);
}

template <typename... Args>
inline std::enable_if_t<sizeof...(Args) == 0, size_t> countArgs() {
  return 0;
}

template <typename First, typename... Rest>
inline size_t countArgs() {
  size_t countFirst = (typeid(First) != typeid(jsi::Runtime &) ? 1 : 0);
  size_t countRest = countArgs<Rest...>();
  return countFirst + countRest;
}

template <typename Ret, typename... Args>
size_t getFunctionArgsCount(std::function<Ret(Args...)> function) {
  return countArgs<Args...>();
}

template <typename Ret, typename... Args>
std::function<jsi::Value(
    jsi::Runtime &,
    const jsi::Value &,
    const jsi::Value *,
    const size_t)>
createJsiFunction(std::function<Ret(Args...)> function) {
  return [function](
             jsi::Runtime &rt,
             const jsi::Value &thisValue,
             const jsi::Value *args,
             const size_t count) {
    auto argz = getArgsForFunction(function, rt, args, count);
    return std::apply(function, std::move(argz));
  };
}

template <typename... Args>
std::function<jsi::Value(
    jsi::Runtime &,
    const jsi::Value &,
    const jsi::Value *,
    const size_t)>
createJsiFunction(std::function<void(Args...)> function) {
  return [function](
             jsi::Runtime &rt,
             const jsi::Value &thisValue,
             const jsi::Value *args,
             const size_t count) {
    auto argz = getArgsForFunction(function, rt, args, count);
    std::apply(function, std::move(argz));
    return jsi::Value::undefined();
  };
}

template <typename Ret, typename... Args>
void installJsiFunction(
    jsi::Runtime &rt,
    std::string_view name,
    std::function<Ret(Args...)> function) {
  auto clb = createJsiFunction(function);
  auto argsCount = getFunctionArgsCount(function);
  jsi::Value jsiFunction = jsi::Function::createFromHostFunction(
      rt, jsi::PropNameID::forAscii(rt, name.data()), argsCount, clb);
  rt.global().setProperty(rt, name.data(), jsiFunction);
}

} // namespace jsi_utils
} // namespace reanimated
