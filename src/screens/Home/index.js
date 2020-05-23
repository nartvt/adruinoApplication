import {withNavigation} from '@react-navigation/compat';
import React, {Component} from 'react';
import {ImageBackground, KeyboardAvoidingView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {backGroundImageHomePage} from '../../utils/Contants';
import styles from './styles';

export class HomeScreen extends Component {
  gotoCircular = () => {
    this.props.navigation.navigate('circle');
  };
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <ImageBackground
          source={backGroundImageHomePage}
          style={styles.container}
          resizeMode="contain">
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
            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={this.gotoCircular}>
              <Text style={{color: 'black'}}>Connect</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
export default withNavigation(HomeScreen);
