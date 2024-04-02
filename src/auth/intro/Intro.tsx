import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ClickButton from '../../components/clickButton/ClickButton';
import introStyles from './introStyles';

const Intro = ({navigation}: any) => {
  return (
    <View style={introStyles.screen}>
      <View style={introStyles.container}>
        <Image
          source={require('../../../assets/screenLogo.png')}
          style={introStyles.logo}
        />
        <Image
          source={require('../../../assets/checkBoxes.png')}
          style={introStyles.image}
        />
        <Text style={introStyles.text1}>Start with taski</Text>
        <Text style={introStyles.text2}>
          Join us now and get your daily things right
        </Text>
        <View style={introStyles.button1}></View>
        <ClickButton
          text="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <TouchableOpacity
          style={introStyles.button2Container}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={introStyles.button2}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;
