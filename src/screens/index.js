import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {backGroundImageHomePage} from '../utils/Contants';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export class ControlScreen extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Home Screen</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            {/* <SafeAreaView style={styles.container}> */}
            <ImageBackground
              source={backGroundImageHomePage}
              style={styles.image}
            />
            {/* </SafeAreaView> */}
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: widthDevice,
    height: 400,
  },
  buttonStyles: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 50,
    alignItems: 'center',
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ControlScreen;
