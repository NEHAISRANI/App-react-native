import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Image,
} from 'react-native';

function Home({navigation}) {
  let checkEmail = 'neha@gmail.com';
  let checkPassword = 'neha@123';
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);

  const pressHandler = () => {
    if (email === checkEmail && password === checkPassword) {
      navigation.navigate('ReviewDetails');
      setAuth(true);
      setEmail('');
      setPass('');
    } else {
      setError(true);
      setEmail('');
      setPass('');
    }
  };

  const notAuthenticated = () => (
    <View>
      <TextInput
        style={styles.inputView}
        placeholder="Entername"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Enterpassword"
        onChangeText={password => setPass(password)}
        defaultValue={password}
      />
      <Button styel={styles.loginBtn} title="login" onPress={pressHandler} />
      {error &&<Text>your email and password is wrong</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../routes/logo.png')} />
      <StatusBar
        backgroundColor="#000000"
        hidden={false}
        barStyle="dark-content"
      />
      {notAuthenticated()}
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 70,
    width: 90,
    height: 120,
    marginBottom: 20,
    borderRadius: 40,
  },
  inputView: {
    textAlign: 'center',
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: 150,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});
