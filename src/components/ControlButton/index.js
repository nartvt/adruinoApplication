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
import {backGroundImageHomePage} from '../../utils/Contants';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export class ControlButton extends Component {
  render() {
    return (
      <>
        <View>
          <View>
            <Text style={styles.text}>Home Screen</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginTop: heightDevice / 4,
    paddingRight: 10,
    paddingLeft: 10,

    width: 350,
    height: 400,
  },
  text: {
    alignItems: 'center',
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ControlButton;
