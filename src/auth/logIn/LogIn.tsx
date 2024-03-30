import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import CustomBackButtonHeading from '../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../components/placeholder/Placeholder';
import ClickButton from '../../components/clickButton/ClickButton';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Please enter your email and password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential?.user?.email) {
          Alert.alert('User login successfully');
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('No user found with that email address');
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Invalid password');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Invalid email address');
        }
        Alert.alert('Invalid data');
      });
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <CustomBackButtonHeading
            title="Login"
            titleStyle={styles.titleStyle}
          />
          <Text style={styles.heading}>Welcome Back.</Text>
          <Text style={styles.message}>
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
        <View style={styles.linkContainer}>
          <Text style={styles.forgetText}>Can't remember Password?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.bottomContainerLink}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.googleAuth}>
          <View>
            <Image source={require('../../../assets/or.png')} />
          </View>
          <View style={styles.googleIcon}>
            <Image source={require('../../../assets/google.png')} />
          </View>
        </View>
        <View style={styles.bottom}></View>
        <ClickButton text="Login" onPress={handleSignIn} />
        <View style={styles.bottomContainer}>
          <Text style={styles.linkContainer}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.bottomContainerLink}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    left: 100,
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  message: {
    color: 'gray',
    fontWeight: '500',
    marginBottom: 30,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: 'black',
  },
  forgetText: {
    color: 'black',
    fontSize: 15,
  },
  bottomContainerLink: {
    color: '#7EBB4F',
    marginLeft: 5,
    fontSize: 15,
  },
  googleAuth: {
    alignItems: 'center',
    marginTop: '4%',
  },
  googleIcon: {
    marginTop: '5%',
  },
  bottom: {
    marginTop: '15%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Login;
