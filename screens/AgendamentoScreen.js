import React, { useState } from 'react';
import { View, Text, Button, Alert, ImageBackground, StyleSheet, TextInput } from 'react-native';

function AgendamentoScreen({ navigation, setAgendamentos  }) {
  // Estado para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const agendar = (tipo) => {
    setAgendamentos(prevAgendamentos => [
      ...prevAgendamentos,
      { id: Math.random().toString(), tipo, nome, data, hora },
    ]);
    Alert.alert(`${tipo} agendado para ${nome} em ${data} às ${hora}!`);
  };

  return (
    <ImageBackground source={require('../assets/fundo2.jpg')} style={styles.container}>
      <Text style={styles.title}>Agendamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (dd/mm/aaaa)"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (hh:mm)"
        value={hora}
        onChangeText={setHora}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Agendar Corte de Cabelo"
            onPress={() => agendar('Corte de cabelo')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Agendar Barba"
            onPress={() => agendar('Barba')}
          />
        </View>
      </View>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  input: {
    height: 60,
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 30,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#DDDDDD',
  },
  buttonContainer: {
    margin: 50,
    width: '90%',
    
  },
  button: {
    margin: 20,
    
    
  },
});

export default AgendamentoScreen;
