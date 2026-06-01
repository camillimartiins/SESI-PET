import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    if (email === '' || senha === '') {
      alert('Preencha todos os campos!');
      return;
    }

    router.push('/inicial');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: '#1DB954',
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        MusicFlow
      </Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: '#282828',
          color: '#FFF',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{
          backgroundColor: '#282828',
          color: '#FFF',
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={entrar}
        style={{
          backgroundColor: '#1DB954',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
      >
        <Text
          style={{
            color: '#FFF',
            textAlign: 'center',
          }}
        >
          Criar conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}