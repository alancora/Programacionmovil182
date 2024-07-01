import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView, Text, ImageBackground } from 'react-native';

const movies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'Interstellar' },
  { id: 3, title: 'The Dark Knight' },
  { id: 4, title: 'The Matrix' },
  { id: 5, title: 'Avatar' },
  { id: 6, title: 'The Lord of the Rings: The Fellowship of the Ring' },
  { id: 7, title: 'Pulp Fiction' },
  { id: 8, title: 'Fight Club' },
  { id: 9, title: 'Forrest Gump' },
  { id: 10, title: 'The Shawshank Redemption' },
  { id: 11, title: 'Gladiator' },
  { id: 12, title: 'Titanic' },
  { id: 13, title: 'The Godfather' },
  { id: 14, title: 'Braveheart' },
  { id: 15, title: 'The Silence of the Lambs' },
];

const MovieItem = ({ movie }) => (
  <View style={styles.movieItem}>
    <Text style={styles.title}>{movie.title}</Text>
  </View>
);

const MovieList = ({ movies }) => (
  <ScrollView style={styles.movieList}>
    {movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </ScrollView>
);

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]); 

  const handleSearch = () => {
    if (!query) {
      setFilteredMovies(movies); 
      return;
    }

    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
      Alert.alert('No se encontraron coincidencias');
    }

    setFilteredMovies(results); 
  };

  return (
    <ImageBackground source={require('./assets/rojo.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar película"
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Buscar" onPress={handleSearch} />
        {filteredMovies.length > 0 && (
          <MovieList movies={filteredMovies} />
        )}
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  movieList: {
    marginTop: 10,
    width: '100%',
  },
  movieItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
});

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
};

export default App;
