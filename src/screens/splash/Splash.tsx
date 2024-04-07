import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

interface SplashProps {
  navigation: NavigationProp<any>;
}

const Splash: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Intro');
      // navigation.navigate('Home');
    }, 2000);
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // navigation.navigate('Intro');
  //     navigation.navigate('Home');
  //   }, 2000);
  // }, []);
  return (
    <View style={styles.screen}>
      <Animatable.Image
        duration={1000}
        animation={'bounce'}
        source={require('../../../assets/splashLogo.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
