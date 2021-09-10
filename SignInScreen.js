import React from 'react';
import database from '@react-native-firebase/database';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayFlatList: [],
    };
  }

  componentDidMount() {
    // database()
    //   .ref('/Students')
    //   .once('value')
    //   .then(snapshot => {
    //     console.log('User data: ', snapshot.val());
    //     this.setState({arrayFlatList: snapshot.val()});
    //   });
    database()
  .ref('Students')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });
    }
    
  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.login}>Login Screen</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder='Enter your email'
                placeholderTextColor='white'
                onChangeText={text => this.setState({email: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry={true}
                style={styles.inputText}
                placeholder="Enter Your password"
                placeholderTextColor="white"
                onChangeText={text => this.setState({email: text})}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginTop: 120,
    marginBottom: 50,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#2F5D69',
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20,
  },
  forgot: {
    color: 'white',
    fontSize: 15,
    marginTop: 15,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#509DB2',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
