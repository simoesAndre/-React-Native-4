import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/pages/Home'
import Cadastro from './src/pages/Cadastro'
import Listagem from './src/pages/Listagem'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Listagem' component={Listagem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
