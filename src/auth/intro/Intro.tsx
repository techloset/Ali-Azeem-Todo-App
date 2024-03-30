import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ClickButton from '../../components/clickButton/ClickButton';

const Intro = ({navigation}: any) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/screenLogo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../../assets/checkBoxes.png')}
          style={styles.image}
        />
        <Text style={styles.text1}>Start with taski</Text>
        <Text style={styles.text2}>
          Join us now and get your daily things right
        </Text>
        <View style={styles.button1}></View>
        <ClickButton
          text="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <TouchableOpacity
          style={styles.button2Container}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.button2}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  logo: {
    marginTop: '22%',
  },
  image: {
    marginTop: '29%',
  },
  text1: {
    marginTop: '45%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text2: {
    color: 'black',
    fontSize: 14,
  },
  button1: {
    marginTop: '5.3%',
  },
  button2Container: {
    marginTop: '2.65%',
    borderWidth: 1,
    borderColor: '#7EBB4F',
    width: '100%',
    height: '6%',
    borderRadius: 5,
  },
  button2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#7EBB4F',
    fontWeight: 'bold',
    margin: '1.7%',
  },
});

export default Intro;
