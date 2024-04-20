import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
import Styles from './profileTabStyles';

import auth from '@react-native-firebase/auth';

const ProfileTab = ({navigation}: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth()?.currentUser;
    setUser(currentUser);
  }, []);

  const signout = async () => {
    await auth().signOut();
    Alert.alert('User Signout');
    navigation.navigate('Login');
  };

  return (
    <View style={Styles.screen}>
      <View style={Styles.container}>
        <CustomBackButtonHeading
          title={'Profile'}
          titleStyle={Styles.titleStyle}
        />
        <View style={Styles.profile}>
          <View>
            <Image
              source={
                user?.photoURL
                  ? {uri: user.photoURL}
                  : require('../../../../assets/emptyProfileFree.png')
              }
              style={Styles.dp}
            />
          </View>
          <View style={Styles.userInfo}>
            <Text style={Styles.name}>{user?.displayName || 'Name'}</Text>
            <Text style={Styles.email}>{user?.email || 'Email'}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
              <Image
                source={require('../../../../assets/edit.png')}
                style={Styles.edit}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.about}>
          <Text style={Styles.aboutText}>About</Text>
        </View>
        <View style={Styles.changePassword}>
          <View>
            <Text style={Styles.changePasswordText}>Change Password</Text>
          </View>
          <View>
            <Image source={require('../../../../assets/nextButton.png')} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            signout();
          }}>
          <Text style={Styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
        <View style={Styles.end}>
          <Text style={Styles.endText}>Todo App</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileTab;
