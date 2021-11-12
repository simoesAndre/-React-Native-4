import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { main } from '../../styles/index'
import Header2 from '../../components/Header2'
import Registration from '../../components/Registration'

export default function Cadastro ({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Header2 />
        <Registration />
      </View>
      <View style={main.background}>
        <View>
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
              <TouchableOpacity style={main.button4} onPress={() => { navigation.navigate('Listagem') }}>
                <Text style={main.buttonText4}>LISTAGEM</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text />
        </View>
      </View>
    </ScrollView>
  )
}
