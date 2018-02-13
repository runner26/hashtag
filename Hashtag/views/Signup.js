import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import styles from '../styles/signUp';
import personIcon from '../assets/images/personIcon.png';

export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={styles.container}>
        <View style={styles.personImageView} >
          <Image style={styles.personImage} source={personIcon}/>
        </View>
        <View style={styles.userInfoView}>
          <View style={styles.nameView}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              autoCorrect={false}
              placeholder='Your name'
              underlineColorAndroid="transparent"
            style={styles.nameTextInput}>
            </TextInput>
          </View>
          <View style={styles.separator}/>
          <View style={styles.regionView}>
            <Text style={styles.label}>Region</Text>
            <TextInput
              autoCorrect={false}
              placeholder='Country'
              underlineColorAndroid="transparent"
            style={styles.nameTextInput}>
            </TextInput>
          </View>

          <View style={styles.separator}/>

          <View style={styles.phoneView}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              autoCorrect={false}
              placeholder='Phone'
              underlineColorAndroid="transparent"
            style={styles.nameTextInput}>
            </TextInput>
          </View>

          <View style={styles.separator}/>

          <View style={styles.passwordView}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              autoCorrect={false}
              placeholder='Password'
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            style={styles.nameTextInput}>
            </TextInput>
          </View>

          <View style={styles.separator}/>

        </View>
        <View style={styles.signUpButton}>
          <TouchableOpacity
            style={styles.button}
            underlayColor='#fff'
            >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Continuing means you've read and agreed to our Terms of Service and Privacy Policy</Text>
        </View>
      </View>
    );
  }
}
