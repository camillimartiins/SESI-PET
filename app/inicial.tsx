import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Inicial() {
  return (
   <ScrollView
  style={{
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  }}
>
      <Text
        style={{
          color: '#1DB954',
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        🎵 MusicFlow
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/favoritos')}
        style={{
          backgroundColor: '#1DB954',
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          ❤️ Ver Favoritos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/tocando')}
        style={{
          backgroundColor: '#282828',
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: '#FFF',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Blinding Lights
          <TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Levitating
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    Dua Lipa
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    As It Was
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    Harry Styles
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Shape of You
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    Ed Sheeran
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Believer
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    Imagine Dragons
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Stay
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    The Kid LAROI
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Perfect
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    Ed Sheeran
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Heat Waves
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    Glass Animals
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
    Save Your Tears
  </Text>
  <Text style={{ color: '#B3B3B3' }}>
    The Weeknd
  </Text>
</TouchableOpacity>
          <TouchableOpacity
  onPress={() => router.push('/tocando')}
  style={{
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  }}
>
  <Text
    style={{
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    }}
  >
    Flowers
  </Text>

  <Text style={{ color: '#B3B3B3' }}>
    Miley Cyrus
  </Text>
</TouchableOpacity>
        </Text>

        <Text style={{ color: '#B3B3B3' }}>
          The Weeknd
        </Text>
      </TouchableOpacity>
  </ScrollView>
  );
}