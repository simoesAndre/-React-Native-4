import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { main } from '../styles/index'
import DataBase from '../database/DataBase'
import Immobile from '../model/Immobile'
import Listing from './Listing'

export default class FinalListing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tipo: '',
      endereco: '',
      finalidade: '',
      valor: '',
      imagem: '',
      imoveis: []
    }
    this.listarImovel()
  }

  cadastrar (tipo, endereco, finalidade, valor, imagem) {
    const novoImovel = new Immobile(tipo, endereco, finalidade, valor, imagem)
    const banco = new DataBase()
    banco.adicionar(novoImovel)
    this.listarImovel()
  }

  listarImovel () {
    const banco = new DataBase()
    banco.listar().then(data => { this.setState({ imoveis: data }) })
  }

  render () {
    return (
      <View>
        <Text style={[main.title, main.space]}>Listagem de Imóveis</Text>
        {this.state.imoveis.map(imovel => (
          <Listing
            key={imovel.id}
            id={imovel.id}
            tipo={imovel.tipo}
            endereco={imovel.endereco}
            finalidade={imovel.finalidade}
            valor={imovel.valor}
            imagem={imovel.imagem}
          />)
        )}
      </View>
    )
  }
}
