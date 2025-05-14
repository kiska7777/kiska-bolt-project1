import { View, Text, StyleSheet } from 'react-native';
import { Clock } from '@/components/Clock';
import { Weather } from '@/components/Weather';
import { CentralOrb } from '@/components/CentralOrb';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Clock />
        <Weather />
      </View>
      <View style={styles.orbContainer}>
        <CentralOrb />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
  },
  orbContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});