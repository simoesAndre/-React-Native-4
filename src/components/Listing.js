import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { main } from '../styles/index'

export default class Listing extends Component {
  render () {
    return (
      <ScrollView>
        <Text style={main.description1}>ID: {this.props.id}</Text>
        <Text style={main.description1}>Tipo: {this.props.tipo}</Text>
        <Text style={main.description1}>Endereço: {this.props.endereco}</Text>
        <Text style={main.description1}>Finalidade: {this.props.finalidade}</Text>
        <Text style={main.description1}>Valor: R$ {this.props.valor}</Text>
        <Image
          style={main.photo}
          source={{ uri: this.props.imagem }}
        />
        <Text style={main.description1}>Imagem: {this.props.imagem}</Text>
        <Text />
      </ScrollView>
    )
  }
}
