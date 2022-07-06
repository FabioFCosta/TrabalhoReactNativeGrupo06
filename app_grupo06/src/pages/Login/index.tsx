import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, Button, Image } from 'react-native-elements';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { AppLoader } from '../../components/AppLoader';
import { InputTexto } from '../../components/InputTexto/InputTexto';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { LoadingContext } from '../../context/LoadingContext';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AutenticacaoContext);
  const { loading, setLoading } = useContext(LoadingContext);


  useEffect(() => {
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, senha: string) => {
    Keyboard.dismiss();
    setLoading(true)
    const respostaLogin = await login(email, senha);
    if (!respostaLogin) {
      setLoading(false)
      Alert.alert(
        "Erro",
        "",
        [
          { text: "OK" },
          { text: "Não foi possível realizar o login." },
        ]
      );
    } else {
      navigation.navigate('HomeScreen');
      setLoading(false)
    }
  }
  return (
    <>
      <DismissKeyboard>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://github.com/pedromlsr/trabalhoReactJSGrupo6/blob/main/trabalho-react-grupo-6/src/Assets/Img/logo-cor.png?raw=true' }}
          />

          <Text style={styles.boasVindas}>FOLDBREAKERS STORE</Text>

          <InputTexto
            secureTextEntry={false}
            placeholder='E-mail'
            onChangeText={setEmail}
            value={email}
          />

          <InputTexto
            secureTextEntry={true}
            placeholder='Senha'
            onChangeText={setSenha}
            value={senha}
          />

          <TouchableOpacity onPress={() => navigation.navigate('RecuperacaoSenha')}>
            <Text style={styles.esqueceuBotao}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {loading ? null : <ActionButton
            text='Login'
            onPress={() => handleLogin(email, senha)}
          />}

          <View>
            <Text style={styles.tituloCadastro}>Ainda não está cadastrado?</Text>
          </View>

          <TouchableOpacity style={styles.cadastroBotao} onPress={() => navigation.navigate('CadastroUsuario')}>
            <Text style={styles.cadastroBotaoText}>Cadastre-se!</Text>
          </TouchableOpacity>
        </ScrollView>
      </DismissKeyboard>
      {loading ? <AppLoader /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070d2d',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },

  boasVindas: {
    color: '#fe5430',
    fontWeight: 'bold',
    fontSize: 33,
    marginBottom: 40,
    textAlign: 'center'
  },

  esqueceuBotao: {
    color: "#fe5430",
    fontSize: 20,
    fontStyle: 'italic',
    marginLeft: 125,
    marginBottom: 25,
    marginTop: -20
  },

  tituloCadastro: {
    color: "#06c1ff",
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 30,
  },

  cadastroBotao: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fe5430',
    borderRadius: 50,
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    height: 50,
    width: '50%'
  },

  cadastroBotaoText: {
    color: '#fe5430',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Login;