import { useEffect, useRef } from 'react';
import { makeMutable, registerSensor, unregisterSensor } from '../core';
import {
  InterfaceOrientation,
  SensorType,
  SharedValue,
  Value3D,
  ValueRotation,
  IOSReferenceFrame,
} from '../commonTypes';

export type SensorConfig = {
  interval: number | 'auto';
  adjustToInterfaceOrientation: boolean;
  iosReferenceFrame: IOSReferenceFrame;
};

export type AnimatedSensor = {
  sensor: SharedValue<Value3D | ValueRotation>;
  unregister: () => void;
  isAvailable: boolean;
  config: SensorConfig;
  interfaceOrientation: SharedValue<InterfaceOrientation>;
};

function initSensorData(
  sensorType: SensorType
): SharedValue<Value3D | ValueRotation> {
  if (sensorType === SensorType.ROTATION) {
    return makeMutable<Value3D | ValueRotation>({
      qw: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      yaw: 0,
      pitch: 0,
      roll: 0,
    });
  } else {
    return makeMutable<Value3D | ValueRotation>({
      x: 0,
      y: 0,
      z: 0,
    });
  }
}

function eulerToQuaternion(pitch: number, roll: number, yaw: number) {
  'worklet';
  const cr = Math.cos(pitch * 0.5);
  const sr = Math.sin(pitch * 0.5);
  const cp = Math.cos(roll * 0.5);
  const sp = Math.sin(roll * 0.5);
  const cy = Math.cos(yaw * 0.5);
  const sy = Math.sin(yaw * 0.5);

  return [
    sr * cp * cy - cr * sp * sy,
    cr * sp * cy + sr * cp * sy,
    cr * cp * sy - sr * sp * cy,
    cr * cp * cy + sr * sp * sy,
  ];
}

function adjustRotationToInterfaceOrientation(
  data: ValueRotation,
  orientationDegrees: number
) {
  'worklet';
  if (orientationDegrees === 90) {
    const tmp = data.pitch;
    data.pitch = data.roll;
    data.roll = -tmp;
    data.yaw = data.yaw - Math.PI / 2;
  } else if (orientationDegrees === 270) {
    const tmp = data.pitch;
    data.pitch = -data.roll;
    data.roll = tmp;
    data.yaw = data.yaw + Math.PI / 2;
  } else if (orientationDegrees === 180) {
    const tmp = data.pitch;
    data.pitch = -data.roll;
    data.roll = -tmp;
    data.yaw = -data.yaw;
  }
  const q = eulerToQuaternion(data.pitch, data.roll, data.yaw);
  data.qx = q[0];
  data.qy = q[1];
  data.qz = q[2];
  data.qw = q[3];
  return data;
}

function adjustVectorToInterfaceOrientation(
  data: Value3D,
  orientationDegrees: number
) {
  'worklet';
  if (orientationDegrees === 90) {
    const tmp = data.x;
    data.x = -data.y;
    data.y = tmp;
  } else if (orientationDegrees === 270) {
    const tmp = data.x;
    data.x = data.y;
    data.y = -tmp;
  } else if (orientationDegrees === 180) {
    data.x *= -1;
    data.y *= -1;
    
  }
  return data;
}

export function useAnimatedSensor(
  sensorType: SensorType,
  userConfig?: SensorConfig
): AnimatedSensor {
  const ref = useRef<AnimatedSensor>({
    sensor: initSensorData(sensorType),
    unregister: () => {
      // NOOP
    },
    isAvailable: false,
    config: {
      interval: 0,
      adjustToInterfaceOrientation: false,
      iosReferenceFrame: IOSReferenceFrame.XArbitraryCorrectedZVertical,
    },
    interfaceOrientation: makeMutable<InterfaceOrientation>(0),
  });

  useEffect(() => {
    ref.current.config = {
      interval: 'auto',
      adjustToInterfaceOrientation: false,
      iosReferenceFrame: IOSReferenceFrame.XArbitraryCorrectedZVertical,
      ...userConfig,
    };
    const sensorData = ref.current.sensor!;
    const id = registerSensor(
      sensorType,
      ref.current.config.interval === 'auto' ? -1 : ref.current.config.interval,
      ref.current.config.iosReferenceFrame,
      (data, orientationDegrees) => {
        'worklet';        
        if (ref.current.config.adjustToInterfaceOrientation) {
          if (sensorType === SensorType.ROTATION) {
            data = adjustRotationToInterfaceOrientation(
              data as ValueRotation,
              orientationDegrees
            );
          } else {
            data = adjustVectorToInterfaceOrientation(
              data as Value3D,
              orientationDegrees
            );
          }
        }
        sensorData.value = data;
        ref.current.interfaceOrientation.value =
          orientationDegrees as InterfaceOrientation;
      }
    );

    if (id !== -1) {
      // if sensor is available
      ref.current.unregister = () => unregisterSensor(id);
      ref.current.isAvailable = true;
    } else {
      // if sensor is unavailable
      ref.current.unregister = () => {
        // NOOP
      };
      ref.current.isAvailable = false;
    }

    return () => {
      ref.current.unregister();
    };
  }, [sensorType, userConfig]);

  return ref.current;
}
