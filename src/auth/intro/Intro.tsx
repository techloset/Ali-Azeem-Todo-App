import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ClickButton from '../../components/clickButton/ClickButton';
import introStyles from './introStyles';
import Images from '../../constants/Images';

const Intro = ({navigation}: any) => {
  return (
    <View style={introStyles.screen}>
      <View style={introStyles.container}>
        <Image source={Images.Logo} style={introStyles.logo} />
        <Image source={Images.CheckBoxes} style={introStyles.image} />
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
