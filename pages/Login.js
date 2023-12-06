import { useState, useEffect } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Firebase from '../firebase';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');

  function login() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function (error) {
        // alert("Email ou senha incorretos!");
      });
  }

  useEffect(() => {
  Firebase.auth().onAuthStateChanged(function (user) {
    setUser(user);
  });
}, []);

  if (user) {
    return navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Image source={require('../assets/icon.png')} style={estilos.logo} />

      <Text style={estilos.textoentrada}> Space Today</Text>

      <TextInput
        placeholderTextColor={'#fff'}
        style={estilos.textoinput}
        placeholder="Digite o email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      <TextInput
        placeholderTextColor={'#fff'}
        style={estilos.textoinput}
        placeholder="Digite a senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => {
          login();
        }}>
        <Text style={estilos.textobotao}> Acessar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#c5c6c8',
    padding: 8,
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },

  textoinput: {
    width: 250,
    height: 20,
    backgroundColor: '#d2bead',
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    borderRadius: 10,
  },

  textoentrada: {
    marginTop: 55,
    margimBottom: 35,
    fontSize: 25,
    color: '#480082',
    fontWeight: 'bold',
    paddingVertical: 14,
  },

  botao: {
    width: 200,
    backgroundColor: '#d2bead',
    height: 40,
    marginTop: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textobotao: {
    fontSize: 30,
    color: '#480082',
    fontWeight: 'bold',
  },
});