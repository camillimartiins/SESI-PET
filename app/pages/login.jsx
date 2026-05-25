import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState("");

  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>🐶 Pet Shop App</Text>
        <Text style={estilos.subtitulo}>
          Entre para cuidar do seu pet
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={estilos.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.replace("Principal")}
        >
          <Text style={estilos.textoBotao}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={estilos.criarConta}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2b2b2b",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#4a90e2",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  criarConta: {
    marginTop: 20,
    textAlign: "center",
    color: "#4a90e2",
    fontSize: 15,
    fontWeight: "600",
  },
});

