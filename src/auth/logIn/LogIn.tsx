import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import CustomBackButtonHeading from '../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../components/placeholder/Placeholder';
import ClickButton from '../../components/clickButton/ClickButton';
import loginStyles from './loginStyles';
import UseLogin from './useLogin';
const Login = ({navigation}: any) => {
  const {setEmail, setPassword, GoogleSignIn} = UseLogin({
    navigation,
  });

  return (
    <ScrollView style={loginStyles.screen}>
      <View style={loginStyles.container}>
        <View>
          <CustomBackButtonHeading
            title="Login"
            titleStyle={loginStyles.titleStyle}
          />
          <Text style={loginStyles.heading}>Welcome Back.</Text>
          <Text style={loginStyles.message}>
            It's nice to see you again, let's get doing
          </Text>
        </View>
        <View>
          <Placeholder
            title="Full Name"
            placeholder="Input your full name here..."
          />
          <Placeholder
            title="Email Address"
            placeholder="yourname@email.com"
            onChangeText={(Email: React.SetStateAction<string>) =>
              setEmail(Email)
            }
          />
          <Placeholder
            title="Phone Number"
            placeholder="Input your phone number here..."
          />
          <Placeholder
            title="Password"
            placeholder="Input your Password here..."
            onChangeText={(password: React.SetStateAction<string>) =>
              setPassword(password)
            }
          />
        </View>
        <View style={loginStyles.linkContainer}>
          <Text style={loginStyles.forgetText}>Can't remember Password?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={loginStyles.bottomContainerLink}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.googleAuth}>
          <View>
            <Image source={require('../../../assets/or.png')} />
          </View>
          <TouchableOpacity
            style={loginStyles.googleIcon}
            onPress={GoogleSignIn}>
            <Image source={require('../../../assets/google.png')} />
          </TouchableOpacity>
        </View>
        <View style={loginStyles.bottom}></View>
        {/* <ClickButton text="Login" onPress={handleSignIn} /> */}
        <View style={loginStyles.bottomContainer}>
          <Text style={loginStyles.linkContainer}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={loginStyles.bottomContainerLink}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
