import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
import Styles from './Styles';

const Profile = ({navigation}: any) => {
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
              source={require('../../../../assets/MyPic.png')}
              style={Styles.dp}
            />
          </View>
          <View style={Styles.userInfo}>
            <Text style={Styles.name}>Ali Azeem</Text>
            <Text style={Styles.email}>aliazeemaliazeem786@gmail.com</Text>
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
        <View>
          <Text style={Styles.signOut}>Sign Out</Text>
        </View>
        <View style={Styles.end}>
          <Text style={Styles.endText}>Todo App</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
