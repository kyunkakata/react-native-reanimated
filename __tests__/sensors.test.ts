import { renderHook, act } from '@testing-library/react-hooks';
import { SensorType, useAnimatedSensor } from '../src/';
import { registerSensor } from '../src/reanimated2/core';

let eventHandler;

jest.mock('../src/reanimated2/core', () => {
  const originalModule = jest.requireActual('../src/reanimated2/core');

  return {
    __esModule: true,
    ...originalModule,
    registerSensor: (
      sensorType,
      interval,
      iosReferenceFrame,
      _eventHandler
    ) => {
      eventHandler = _eventHandler;
    },
  };
});

expect.extend({
    toBeEqualRounded(received, data) {
    const ok = received.qw.toFixed(2) === data.qw.toFixed(2) &&
    received.qx.toFixed(2) === data.qx.toFixed(2) &&
    received.qy.toFixed(2) === data.qy.toFixed(2) &&
    received.qz.toFixed(2) === data.qz.toFixed(2) &&
    received.pitch.toFixed(2) === data.pitch.toFixed(2) &&
    received.roll.toFixed(2) === data.roll.toFixed(2) &&
    received.yaw.toFixed(2) === data.yaw.toFixed(2);
    

      return ok ? ({
        pass: true,
        message: () => `Expected ${received} not to be a power of `
      }) : ({
        pass: false,
        message: () => `Expected ${JSON.stringify(data)} received ${JSON.stringify(received)}`
      });
    }
  });

describe('Sensors', () => {
  it('returns rotation sensors', () => {
    const { result } = renderHook(() => useAnimatedSensor(SensorType.ROTATION));

    const data = {
      qw: 0,
      qx: 1,
      qy: 2,
      qz: 3,
      yaw: 4,
      pitch: 5,
      roll: 6,
    };

    eventHandler(data, 90);

    expect(result.current.sensor.value).toBe(data);
    expect(result.current.interfaceOrientation.value).toBe(90);
  });

  it('returns 3d sensor', () => {
    const { result } = renderHook(() =>
      useAnimatedSensor(SensorType.ACCELEROMETER)
    );

    const data = {
      x: 1,
      y: 2,
      z: 3,
    };

    eventHandler(data, 180);

    expect(result.current.sensor.value).toBe(data);
    expect(result.current.interfaceOrientation.value).toBe(180);
  });

  it('adjusts orientation of the rotation sensor', () => {
    const { result } = renderHook(() =>
      useAnimatedSensor(SensorType.ROTATION, {
        adjustToInterfaceOrientation: true,
      })
    );

    // yaw = 45deg, pitch = 30deg, roll=60deg
    const data = {
      qw: 0.7233174,
      qx: 0.02226,
      qy: 0.4396797,
      qz: 0.5319757,
      yaw: 1.0471976,
      pitch: 0.5235988,
      roll: 0.7853982,
    };

    // portrait orientation
    act(() => eventHandler({ ...data }, 0));

    const data0 = {
        qw:  0.822,
        qx:  0.022,
        qy:  0.440,
        qz: 0.360,
        yaw:  1.047,
        pitch:  0.524,
        roll:  0.785,
    };

    expect(result.current.sensor.value).toBeEqualRounded(data0);
    expect(result.current.interfaceOrientation.value).toBe(0);

    // landscape orientation
    act(() => eventHandler({ ...data }, 90));

    const data90 = {
        qw:   0.135,
        qx:  0.327,
        qy:  0.295,
        qz: 0.888,
        yaw:  2.618,
        pitch:  0.785,
        roll:  -0.524,
    };

    expect(result.current.sensor.value).toBeEqualRounded(data90);
    expect(result.current.interfaceOrientation.value).toBe(90);

    // upside down
    act(() => eventHandler({ ...data }, 180));

    const data180 = {
      x: -1,
      y: -2,
      z: 3,
    };

    expect(result.current.sensor.value).toStrictEqual(data180);
    expect(result.current.interfaceOrientation.value).toBe(180);

    // landscape orientation
    eventHandler(data, 270);

    const data270 = {
      x: 2,
      y: -1,
      z: 3,
    };

    expect(result.current.sensor.value).toStrictEqual(data270);
    expect(result.current.interfaceOrientation.value).toBe(270);
  });

  it('adjusts orientation of the 3d sensor', () => {
    const { result } = renderHook(() =>
      useAnimatedSensor(SensorType.ACCELEROMETER, {
        adjustToInterfaceOrientation: true,
      })
    );

    const data = {
      x: 1,
      y: 2,
      z: 3,
    };

    // portrait orientation
    act(() => eventHandler({ ...data }, 0));

    const data0 = {
      x: 1,
      y: 2,
      z: 3,
    };

    expect(result.current.sensor.value).toStrictEqual(data0);
    expect(result.current.interfaceOrientation.value).toBe(0);

    // landscape orientation
    act(() => eventHandler({ ...data }, 90));

    const data90 = {
      x: -2,
      y: 1,
      z: 3,
    };

    expect(result.current.sensor.value).toStrictEqual(data90);
    expect(result.current.interfaceOrientation.value).toBe(90);

    // upside down
    act(() => eventHandler({ ...data }, 180));

    const data180 = {
      x: -1,
      y: -2,
      z: 3,
    };

    expect(result.current.sensor.value).toStrictEqual(data180);
    expect(result.current.interfaceOrientation.value).toBe(180);

    // landscape orientation
    eventHandler(data, 270);

    const data270 = {
      x: 2,
      y: -1,
      z: 3,
    };

    expect(result.current.sensor.value).toStrictEqual(data270);
    expect(result.current.interfaceOrientation.value).toBe(270);
  });
});
