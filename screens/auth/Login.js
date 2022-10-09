import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Login({ navigation }) {

  const [inputFocus, setInputFocus] = useState(false);
  const [inputFocus2, setInputFocus2] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background_login.png')} style={{ width: width, height: width*0.74 }}/>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.loginContainer}>
          <Image source={require('../../assets/guinchonline_logo.png')} style={{ width: 320, height: 50 }} />
          <Text style={styles.grayText}>Entre com sua conta</Text>
          <View>
            <TextInput
              style={inputFocus ? styles.inputFocus : styles.input}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={inputFocus2 ? styles.inputFocus : styles.input}
              onFocus={() => setInputFocus2(true)}
              onBlur={() => setInputFocus2(false)}
              placeholder="Senha"
              keyboardType="default"
              secureTextEntry="true"
            />
          </View>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ fontSize: 16 }}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('RecoveryPassword')}>
            <Text style={{ fontSize: 16 }}>Esqueceu a senha ?</Text>
          </TouchableOpacity>
          <View style={styles.singupContainer}>
            <Text style={styles.grayText}>Você tem uma conta ? </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, color: '#FFBE0C' }}>Crie uma</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEC31F',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    width: width,
    height: height / 1.7,
    paddingBottom: 40,
    paddingTop: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  singupContainer: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#F1F1F3',
    borderRadius: 100,
    width: width / 1.2,
    color: '#B7B6B9',
    fontSize: 16,
    borderColor: '#F1F1F3',
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  inputFocus: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    width: width / 1.2,
    color: '#FFBE0C',
    borderColor: '#FFBE0C',
    borderWidth: 1,
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#FFBE0C',
    borderColor: '#FFF',
    width: width / 1.2,
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 20
  },
  grayText: {
    color: '#B7B6B9',
    fontSize: 16
  }
});

export default Login;