import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, Icon, Button } from 'react-native-elements';
import { AppLoader } from '../../components/AppLoader';
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
          <Text style={styles.boasVindas}>{'Login'}</Text>
          <Input
            inputContainerStyle={styles.inputContainer}
            style={styles.inputEntrada}
            placeholder="E-mail"
            placeholderTextColor={"#070d2d"}
            onChangeText={setEmail}
            value={email}
          //leftIcon={<Icon name="user" color="#000" type="font-awesome" size={24} />}
          />
          <Input
            inputContainerStyle={styles.inputContainer}
            style={styles.inputEntrada}
            placeholder="Senha"
            placeholderTextColor={"#070d2d"}
            onChangeText={setSenha}
            value={senha}
            //leftIcon={<Icon name="key" color="#000" type="font-awesome" size={24} />}
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('RecuperacaoSenha')}
          >
            <Text style={styles.esqueceuBotao}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {loading ? null : <Button
            titleStyle={styles.tituloBotao}
            containerStyle={styles.containerBotao}
            buttonStyle={styles.styleBotao}
            title="Login"
            onPress={() => handleLogin(email, senha)}
          />}

          <View>
            <Text style={styles.tituloCadastro}>Ainda não está cadastrado?</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('CadastroUsuario')}>
            <Text style={styles.cadastroBotao}>Cadastre-se!</Text>
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
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical: 16
  },
  boasVindas: {
    color: '#fe5430',
    fontWeight: 'bold',
    fontSize: 33,
    marginBottom: 40,
    textAlign: 'center'
  },
  tituloBotao: {
    color: '#070d2d',
    fontSize: 20
  },
  styleBotao: {
    backgroundColor: '#06c1ff'
  },
  containerBotao: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 40,
    width: 175
  },
  inputEntrada: {
    backgroundColor: '#c4dfe8',
    color: '#070d2d',
    marginVertical: 7,
    borderRadius: 40,
    padding: 15,
    height: 80,
    width: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  inputContainer: {
    borderBottomWidth: 0,
    paddingHorizontal: 30
  },
  esqueceuBotao: {
    color: "#fe5430",
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginLeft: 145,
    marginBottom: 25,
    marginTop: -20
  },
  tituloCadastro: {
    color: "#06c1ff",
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 40,
  },
  cadastroBotao: {
    color: "#fe5430",
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20
  }

})

export default Login;