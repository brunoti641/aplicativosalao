import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './screens/MenuScreen';
import AgendamentoScreen from './screens/AgendamentoScreen';
import AgendamentosMarcadosScreen from './screens/AgendamentosMarcadosScreen';

const Stack = createStackNavigator();

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Agendamento">
          {props => <AgendamentoScreen {...props} setAgendamentos={setAgendamentos} />}
        </Stack.Screen>
        <Stack.Screen name="AgendamentosMarcados">
          {props => <AgendamentosMarcadosScreen {...props} agendamentos={agendamentos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
