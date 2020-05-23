import React from 'react';
import {Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {styles} from './styles';
// const propStyle = percent => {
//   const base_degrees = -135;
//   const rotateBy = base_degrees + percent * 3.6;
//   return {
//     transform: [{rotateZ: `${rotateBy}deg`}],
//   };
// };
const CircularProgress = props => {
  console.log(props.percent);
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={props.percent}
        radius={50}
        borderWidth={8}
        color="#3399FF"
        // shadowColor="#999"
        bgColor="#fff">
        <Text style={styles.textstyle}>{props.percent}%</Text>
      </ProgressCircle>
    </View>
  );
};

export default CircularProgress;
