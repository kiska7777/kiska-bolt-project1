import { View, Text, StyleSheet } from 'react-native';

interface ChatMessageProps {
  message: {
    text: string;
    isAI: boolean;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <View style={[styles.container, message.isAI ? styles.aiMessage : styles.userMessage]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  aiMessage: {
    backgroundColor: '#111',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 5,
  },
  userMessage: {
    backgroundColor: '#00f2ea',
    alignSelf: 'flex-end',
    borderTopRightRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});