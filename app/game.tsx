import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameBoard from '../components/GameBoard';

export default function GameScreen() {
  const [level, setLevel] = useState(1);
  const [message, setMessage] = useState('');

  const handleLevelUp = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Level {level}</Text>
      <Text>{message}</Text>
      <GameBoard level={level} setMessage={setMessage} onLevelUp={handleLevelUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    color:'white'
  },
});
