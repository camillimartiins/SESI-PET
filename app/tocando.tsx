import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Tocando() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          width: 250,
          height: 250,
          backgroundColor: '#1DB954',
          borderRadius: 20,
          marginBottom: 20,
        }}
      />

      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        Blinding Lights
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginBottom: 30,
        }}
      >
        The Weeknd
      </Text>

      <Text
        style={{
          fontSize: 30,
          marginBottom: 20,
        }}
      >
        ⏮️ ⏸️ ⏭️
      </Text>

      <Text
        style={{
          marginBottom: 20,
        }}
      >
        ❤️ Favoritada
      </Text>

      <Button
        title="Voltar"
        onPress={() => router.back()}
      />
    </View>
  );
}