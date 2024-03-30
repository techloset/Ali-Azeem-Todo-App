import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomBackButtonHeading from '../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../components/placeholder/Placeholder';
import ClickButton from '../../components/clickButton/ClickButton';
import UseForgetPassword from './useForgetPassword';
import ForgetPasswordStyles from './forgetPasswordStyles';

const ForgetPassword = ({navigation}: any) => {
  const {email, setEmail, handleResetPassword} = UseForgetPassword({
    navigation,
  });
  return (
    <ScrollView style={ForgetPasswordStyles.screen}>
      <View style={ForgetPasswordStyles.container}>
        <View>
          <CustomBackButtonHeading
            title="Forget Password"
            titleStyle={ForgetPasswordStyles.titleStyle}
          />
          <Text style={ForgetPasswordStyles.heading}>Welcome Back.</Text>
          <Text style={ForgetPasswordStyles.message}>
            It's nice to see you again, let's recover your Password.
          </Text>
        </View>
        <View>
          <Placeholder
            title="Email Address"
            placeholder="yourname@email.com"
            onChangeText={(text: React.SetStateAction<string>) =>
              setEmail(text)
            }
            value={email}
          />
        </View>

        <View style={ForgetPasswordStyles.bottom}>
          <ClickButton
            text="Enter"
            onPress={() => {
              handleResetPassword();
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
