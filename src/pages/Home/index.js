import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { main } from '../../styles/index'
import Header from '../../components/Header'

export default function Home ({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Header />
      </View>
      <View style={main.background}>
        <View>
          <Text style={main.title}>Seja Bem Vindo ao Sistema</Text>
          <Text style={main.subtitle}>O que deseja acessar agora:</Text>
          <View style={main.buttonArea}>
            <TouchableOpacity style={main.button} onPress={() => { navigation.navigate('Cadastro') }}>
              <Text style={main.buttonText}>CADASTRO</Text>
            </TouchableOpacity>
          </View>
          <View style={main.buttonArea}>
            <TouchableOpacity style={main.button} onPress={() => { navigation.navigate('Listagem') }}>
              <Text style={main.buttonText}>LISTAGEM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
