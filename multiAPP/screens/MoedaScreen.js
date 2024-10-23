import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoedaScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela Moedas!</Text>
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