import { View, Text, FlatList, Button } from 'react-native';
import { router } from 'expo-router';

const favoritas = [
  { id: '1', titulo: 'Blinding Lights' },
  { id: '2', titulo: 'Flowers' },
  { id: '3', titulo: 'Perfect' },
];

export default function Favoritos() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Músicas Favoritas
      </Text>

      <FlatList
        data={favoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 15,
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            ❤️ {item.titulo}
          </Text>
        )}
      />

      <Button
        title="Voltar"
        onPress={() => router.back()}
      />
    </View>
  );
}
