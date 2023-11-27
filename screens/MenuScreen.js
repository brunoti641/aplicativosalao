import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

function MenuScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/fundomenu.jpg')} style={styles.container}>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamento')}>
        <Text style={styles.buttonText}>Ir para Agendamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AgendamentosMarcados')}>
        <Text style={styles.buttonText}>Ver Agendamentos Marcados</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    width: '80%',
    marginTop: 60,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default MenuScreen;
