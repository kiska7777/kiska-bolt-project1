import { TouchableOpacity, StyleSheet } from 'react-native';
import { Send } from 'lucide-react-native';

interface SendButtonProps {
  onPress: () => void;
}

export function SendButton({ onPress }: SendButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Send color="#fff" size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00f2ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
});