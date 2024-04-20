import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomBackButtonHeading from '../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../components/placeholder/Placeholder';
import ClickButton from '../../components/clickButton/ClickButton';
import CheckBox from 'react-native-check-box';
import useSignUp from './useSignup';
import signUpStyles from './signupStyles';

const SignUp = ({navigation}: any) => {
  const {
    createUserAndAddToFirestore,
    setEmail,
    setPassword,
    setName,
    setPhone,
    email,
    name,
    password,
    phone,
    isChecked,
    setIsChecked,
  } = useSignUp({navigation});

  return (
    <View style={signUpStyles.screen}>
      <View style={signUpStyles.container}>
        <View>
          <CustomBackButtonHeading
            title="Signup"
            titleStyle={signUpStyles.titleStyle}
          />
          <Text style={signUpStyles.heading}>Join us today.</Text>
          <Text style={signUpStyles.message}>
            It's nice to see you, let's start
          </Text>
        </View>
        <View>
          <Placeholder
            title="Full Name"
            placeholder="Input your full name here..."
            keyboardType="text"
            value={name}
            onChangeText={(txt: string) => setName(txt)}
          />
          <Placeholder
            title="Email Address"
            placeholder="yourname@email.com"
            keyboardType="email"
            value={email}
            onChangeText={(txt: string) => setEmail(txt)}
          />
          <Placeholder
            title="Phone Number"
            placeholder="Input your phone number here..."
            value={phone}
            keyboardType="numeric"
            onChangeText={(num: string) => setPhone(num)}
          />
          <Placeholder
            title="Password"
            placeholder="Input your Password here..."
            keyboardType="text"
            value={password}
            onChangeText={(txt: any) => setPassword(txt)}
          />
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            rightText="I Agree with Terms & Conditions"
            rightTextStyle={{
              fontSize: 15,
              marginBottom: 1,
              color: isChecked ? '#7EBB4F' : 'black',
            }}
          />
        </View>
        <View style={signUpStyles.bottom}></View>
        <ClickButton text="Signup" onPress={createUserAndAddToFirestore} />
        <View style={signUpStyles.bottomContainer}>
          <Text style={signUpStyles.bottomContainerText}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={signUpStyles.bottomContainerLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
