import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FinalListing from '../../components/FinalListing'
import { main } from '../../styles/index'

export default function Listagem ({ navigation }) {
  return (
    <ScrollView>
      <FinalListing />
      <Text />
      <Text />
      <Text style={main.subtitle2}>Ir para a página:</Text>
      <View style={{ flexDirection: 'row', marginTop: 7, flex: 1 }}>
        <View style={main.buttonArea4}>
          <TouchableOpacity style={main.button4} onPress={() => { navigation.navigate('Home') }}>
            <Text style={main.buttonText4}>HOME</Text>
          </TouchableOpacity>
        </View>
        <View style={main.buttonArea4}>
          <TouchableOpacity style={main.button4} onPress={() => { navigation.navigate('Cadastro') }}>
            <Text style={main.buttonText4}>CADASTRO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text />
    </ScrollView>
  )
}
