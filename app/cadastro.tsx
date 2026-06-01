import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const cadastrar = () => {
    if (
      nome === '' ||
      email === '' ||
      senha === '' ||
      confirmarSenha === ''
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    router.push('/');
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
        Cadastro
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
        style={{
          backgroundColor: '#282828',
          color: '#FFF',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

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
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Confirmar Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        style={{
          backgroundColor: '#282828',
          color: '#FFF',
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={cadastrar}
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
          Cadastrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Text
          style={{
            color: '#FFF',
            textAlign: 'center',
          }}
        >
          Voltar para Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}''