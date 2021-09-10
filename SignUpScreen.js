import React, {Component} from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import database from '@react-native-firebase/database';

export default class SignUpScreen extends Component {


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
    .ref('/Students')
    .set({
      name: 'Sharjeel',
      email: 'mzain7007@gmail.com',
      Phone: '03164032387'
    })
    .then(() => console.log('Data set.'));
    }
    render(){
    return (
          <View style={styles.container}>
               <Text style={styles.login}>SignUp Screen</Text>
               <View style={styles.inputView} >
                 <TextInput
                  style={styles.inputText}
                  placeholder="Enter Your Email"
                  placeholderTextColor="white"
                  onChangeText={text => this.setState({ email: text })} />
              </View>
              <View style={styles.inputView} >
                <TextInput secureTextEntry={true}
                  style={styles.inputText}
                  placeholder="Enter Your password"
                  placeholderTextColor="white"
                  onChangeText={text => this.setState({ email: text })} />
              </View>
              <View style={styles.inputView} >
                <TextInput secureTextEntry={true}
                  style={styles.inputText}
                  placeholder="Enter Your Phone Number"
                  placeholderTextColor="white"
                  onChangeText={text => this.setState({ email: text })} />
              </View>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('SignInScreen')}>
                <Text style={styles.loginText}>Go To Sign In</Text>
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
      fontWeight: "bold",
      fontSize: 50,
      color: "#fff",
      marginTop: 20,
      marginBottom: 50,
    },
    inputText: {
      height: 50,
      color: "white",
    },
    inputView: {
      width: "80%",
      backgroundColor: "#2F5D69",
      borderRadius: 25,
      height: 50,
      marginTop: 20,
      justifyContent: "center",
      padding: 20
    },
    forgot: {
      color: "white",
      fontSize: 15,
      marginTop: 15,
    },
    loginText: {
      color: "white",
      fontSize: 20,
    },
    loginBtn: {
      width: "80%",
      backgroundColor: "#509DB2",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
  });