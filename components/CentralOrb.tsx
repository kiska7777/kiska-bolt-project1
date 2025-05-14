import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useSharedValue,
  withSequence,
} from 'react-native-reanimated';
import { useEffect } from 'react';

export function CentralOrb() {
  const pulseValue = useSharedValue(1);
  const rotateValue = useSharedValue(0);

  useEffect(() => {
    pulseValue.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      true
    );

    rotateValue.value = withRepeat(
      withTiming(360, { duration: 10000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: pulseValue.value },
      { rotate: `${rotateValue.value}deg` },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.orb, animatedStyle]}>
        <View style={styles.inner} />
      </Animated.View>
      <View style={styles.ring} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orb: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00f2ea22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00f2ea',
  },
  ring: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#00f2ea33',
  },
});