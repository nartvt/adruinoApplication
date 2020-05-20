import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {backGroundImageHomePage} from '../utils/Contants';

export class ControlScreen extends Component {
  render() {
    return (
      <ImageBackground source={backGroundImageHomePage} resizeMode="contain">
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.home}>
            <Text style={styles.text}>Home Screen</Text>
          </View>

          <View>
            <TextInput
              placeholder="IP address"
              keyboardType="default"
              returnKeyLabel="Next"
              placeholderTextColor="orange"
              // onChangeText={handleChange('taiKhoan')}
              autoCapitalize="none"
              style={styles.formControl}
            />
            <TouchableOpacity style={styles.buttonStyles}>
              <Text style={{color: 'black'}}>Connect</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  home: {
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    alignItems: 'center',
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonStyles: {
    backgroundColor: '#66ffff',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: '40%',
    borderRadius: 5,
  },
  formControl: {
    top: 0,
    left: 0,
    bottom: 0,
    borderColor: 'blue',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    fontSize: 20,
    color: 'red',
    borderRadius: 5,
    marginBottom: 10,
    width: 350,
  },
});

export default ControlScreen;
