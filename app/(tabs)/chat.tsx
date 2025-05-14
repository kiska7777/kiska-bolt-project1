import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import { ChatMessage } from '@/components/ChatMessage';
import { SendButton } from '@/components/SendButton';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you today?', isAI: true },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, { id: Date.now().toString(), text: message, isAI: false }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#666"
        />
        <SendButton onPress={handleSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  messageList: {
    padding: 20,
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  input: {
    flex: 1,
    backgroundColor: '#111',
    borderRadius: 25,
    padding: 15,
    marginRight: 10,
    color: '#fff',
  },
});