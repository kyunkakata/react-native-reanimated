import * as React from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const photo = require('./assets/image.jpg');
const Stack = createNativeStackNavigator();
const AnimatedImage = Animated.createAnimatedComponent(Image);

function Card({
  navigation,
  title,
  transitionTag,
  isOpen = false,
  nextScreen,
}: any) {
  const goNext = (screenName: string) => {
    navigation.navigate(screenName, {
      title: title,
      sharedTransitionTag: transitionTag,
    });
  };

  return (
    <TouchableNativeFeedback
      onPress={() => {
        goNext(nextScreen);
      }}>
      <Animated.View
          sharedTransitionTag={transitionTag + '8'} style={isOpen ? { flex: 1 } : { flex: 1, }}>
      <Animated.View
        style={
          isOpen
            ? { height: 500, marginTop: 50, backgroundColor: 'green' }
            : { height: 120, marginTop: 20, backgroundColor: 'blue' }
        }
        sharedTransitionTag={transitionTag + '1'}>
        <Animated.Text
          sharedTransitionTag={transitionTag + '2'}
          style={{ width: '100%', height: 20 }}>
          {title}
        </Animated.Text>
        <AnimatedImage
          sharedTransitionTag={transitionTag + '3'}
          source={photo}
          style={{ width: '100%', height: isOpen ? 300 : 100 }}
        />
        {/* <Animated.View
        sharedTransitionTag={transitionTag + "3"}
        style={{ width: '100%', borderWidth: 5, backgroundColor: isOpen ? 'olive' : 'purple', height: isOpen ? 200 : 100 }}
      /> */}
        <Animated.Text
          sharedTransitionTag={transitionTag + '4'}
          style={{ width: '100%', height: isOpen ? 100 : 0 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid,
          earum non, dignissimos fugit rerum exercitationem ab consequatur,
          error animi veritatis delectus. Nostrum sapiente distinctio possimus
          vel nam facilis ut?
        </Animated.Text>
      </Animated.View></Animated.View>
    </TouchableNativeFeedback>
  );
}

function Screen1({ navigation }: StackScreenProps<ParamListBase>) {
  return (
    <Animated.ScrollView style={{ flex: 1 /* marginTop: 200 */ }}>
      {[...Array(6)].map((_, i) => (
        <Card
          key={i}
          navigation={navigation}
          title={'Mleko' + i}
          transitionTag={'mleko1' + i}
          nextScreen="Screen2"
        />
      ))}
    </Animated.ScrollView>
  );
}

function Screen2({ route, navigation }: StackScreenProps<ParamListBase>) {
  const { title, sharedTransitionTag } = route.params as any;

  const goNext = () => {
    console.log("HEre")
    navigation.navigate("Screen1", {
      title,
      sharedTransitionTag,
    });
  };

  const translation = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };
  type AnimatedGHContext = {
    startX: number;
    startY: number;
  };
  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = translation.x.value;
      ctx.startY = translation.y.value;
    },
    onActive: (event, ctx) => {
      translation.x.value = ctx.startX + event.translationX;
      translation.y.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      console.log(translation.x.value, translation.y.value)
      if (Math.abs(translation.x.value) + Math.abs(translation.y.value) > 150) {
        console.log('here')
        runOnJS(goNext)()
      }
      translation.x.value = withSpring(0);
      translation.y.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translation.x.value },
        { translateY: translation.y.value },
      ],
    };
  });

  const containerOpacity = useAnimatedStyle(() => {
    const alpha = 0 // (1 - (Math.abs(translation.x.value)+Math.abs(translation.y.value)) / 150);
    return {
      height: "100%",
      backgroundColor: `rgba(255, 255, 255, ${alpha})`
    }
  })

  return (
    <Animated.View style={containerOpacity}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
          <Card
            navigation={navigation}
            title={title}
            transitionTag={sharedTransitionTag}
            isOpen={true}
            nextScreen="Screen1"
          />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

export function CardExample() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        // stackAnimation: 'fade_from_bottom',
        // stackAnimation: 'slide_from_right',
        // stackAnimation: 'fade',
        stackAnimation: 'none',
        // stackPresentation: 'transparentModal',
      }}>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
