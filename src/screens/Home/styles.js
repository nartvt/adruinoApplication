import {StyleSheet} from 'react-native';

const stylesHome = StyleSheet.create({
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
    borderColor: 'red',
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
export default stylesHome;
