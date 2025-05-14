import { View, Text, StyleSheet } from 'react-native';
import { Cloud } from 'lucide-react-native';

export function Weather() {
  return (
    <View style={styles.container}>
      <Cloud color="#00f2ea" size={24} />
      <Text style={styles.temperature}>72°F</Text>
      <Text style={styles.location}>San Francisco</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 10,
    gap: 8,
  },
  temperature: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    color: '#666',
    fontSize: 14,
  },
});