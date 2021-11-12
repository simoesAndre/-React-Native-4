import React, { Component, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { main } from '../styles/index'
import DataBase from '../database/DataBase'
import Immobile from '../model/Immobile'

import { RNCamera } from 'react-native-camera' 

export default class Registration extends Component {
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

  tirarFoto = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({imagem: data.uri})
    }
  };

  render () {
    return (
      <View style={main.background}>
        <View>
          <Text style={main.title}>Cadastro de Imóveis</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={main.description1}>Tipo:</Text>
            <TextInput style={main.form1} placeholder='' onChangeText={(textoDigitado) => { this.setState({ tipo: textoDigitado }) }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={main.description1}>Endereço:</Text>
            <TextInput style={main.form1} placeholder='Rua, N°, Bairro, Cidade' onChangeText={(textoDigitado) => { this.setState({ endereco: textoDigitado }) }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={main.description1}>Finalidade:</Text>
            <TextInput style={main.form1} placeholder='Compra ou Aluguel' onChangeText={(textoDigitado) => { this.setState({ finalidade: textoDigitado }) }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            <Text style={main.description1}>Valor:</Text>
            <TextInput style={main.form1} placeholder='0000,00' onChangeText={(textoDigitado) => { this.setState({ valor: textoDigitado }) }} />
          </View>
          <Text />
          <Text />
          <Text />
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ height: 20, width: 100 }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}

              // Irá pedir permissão para acessar a câmera, caso não haja
              androidCameraPermissionOptions={{
                title: 'Permissão para usar a câmera',
                message: 'Nós precisamos da sua permissão para usar a câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar',
              }}
              // Irá pedir permissão para acessar o áudio, caso não haja
              androidRecordAudioPermissionOptions={{
                title: 'Permissão para usar gravação de áudio',
                message: 'Precisamos da sua permissão para usar seu áudio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar',
              }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }} >
              <TouchableOpacity onPress={this.tirarFoto.bind(this)} style={{ backgroundColor: '#DCDCDC', height: 30, justifyContent: 'center', top: 20}}>
                <Text style={{ fontSize: 13, color: '#696969' }}> TIRAR FOTO </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={main.buttonArea3}>
            <TouchableOpacity style={main.button3} onPress={() => { this.cadastrar(this.state.tipo, this.state.endereco, this.state.finalidade, this.state.valor, this.state.imagem) }}>
              <Text style={main.buttonText3}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
