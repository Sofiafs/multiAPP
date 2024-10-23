import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function imcscreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela Medidas!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});