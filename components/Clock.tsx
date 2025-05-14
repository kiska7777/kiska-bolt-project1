import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 10,
  },
  time: {
    color: '#00f2ea',
    fontSize: 20,
    fontWeight: 'bold',
  },
});