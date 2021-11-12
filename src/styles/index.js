import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const header = StyleSheet.create({
  background: {
    width: width,
    flex: 1
  },
  areaMenu: {
    flex: 1,
    backgroundColor: '#3CB371',
    flexDirection: 'row',
    height: 40
  },
  iconMenu: {
    left: 5,
    top: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFF00',
    textAlign: 'center',
    top: 5
  },
  iconSearch: {
    top: 3
  },
  banner: {
    width: 360,
    height: 128
  }
})

const main = StyleSheet.create({
  background: {
    width: width,
    flex: 3
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    margin: 3
  },
  buttonArea: {
    alignItems: 'center',
    margin: 3
  },
  button: {
    backgroundColor: '#4F4F4F',
    width: 280,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  // estilização da página Cadastro //
  description1: {
    fontSize: 15,
    flex: 1,
    marginLeft: 7,
    top: 7
  },
  form1: {
    backgroundColor: '#DCDCDC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: 15,
    height: 37,
    flex: 3,
    marginRight: 10
  },
  buttonArea2: {
    marginRight: 10
  },
  button2: {
    backgroundColor: '#DCDCDC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 37,
    width: 260,
    justifyContent: 'center'
  },
  buttonText2: {
    fontSize: 15,
    textAlign: 'center',
    color: '#808080',
    fontWeight: 'bold'
  },
  buttonArea3: {
    alignItems: 'center',
    marginTop: 40
  },
  button3: {
    backgroundColor: 'black',
    width: 180,
    height: 40,
    justifyContent: 'center'
  },
  buttonText3: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  subtitle2: {
    textAlign: 'center',
    fontSize: 16
  },
  buttonArea4: {
    alignItems: 'center',
    flex: 1
  },
  button4: {
    backgroundColor: '#4F4F4F',
    width: 130,
    height: 35,
    justifyContent: 'center'
  },
  buttonText4: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  // estilização da página Listagem //
  space: {
    marginBottom: 10
  },
  photo: {
    marginLeft: 7,
    top: 7,
    height: 50,
    width: 80,
    alignSelf: 'center'
  }
})

export { header, main }
