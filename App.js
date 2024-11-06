import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = (text) => {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');
    setIsPalindrome(cleanedText === reversedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verificador de Palíndromo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra ou frase"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Verificar" onPress={() => checkPalindrome(inputText)} />
      {isPalindrome !== null && (
        <Text style={styles.result}>
          O texto "{inputText}" {isPalindrome ? 'é' : 'não é'} um palíndromo.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
