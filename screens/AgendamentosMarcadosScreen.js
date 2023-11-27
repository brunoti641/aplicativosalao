import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, FlatList } from 'react-native';

function AgendamentosMarcadosScreen({ navigation, agendamentos }) {
    return (
    <ImageBackground source={require('../assets/fundo2.jpg')} style={styles.container}>
      <Text style={styles.title}>Agendamentos Marcados</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.agendamento}>
            <Text>{item.nome} -{item.tipo} - {item.data} às {item.hora}</Text>
          </View>
        )}
      />
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
  agendamento: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
});
  export default AgendamentosMarcadosScreen;