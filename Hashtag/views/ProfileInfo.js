import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import styles from '../styles/profileInfo';
import personIcon from '../assets/images/personIcon.png';
import editIcon from '../assets/images/ic_mode_edit.png';

export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={styles.container}>
        <View style={styles.personImageView} >
          <Image style={styles.personImage} source={personIcon}/>
        </View>
        <View style={styles.nameView}>
          <TextInput
            autoCorrect={false}
            value='John Doe'
            underlineColorAndroid="transparent"
            style={styles.nameText}>
          </TextInput>
          <TouchableOpacity>
            <Image style={styles.editIcon} source={editIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.notUserNameView}>
          <Text style={styles.notUserNameText} >
            This is not your username or pin.
            This name will be visible to your HashTag contacts</Text>
        </View>
        <Text style={styles.aboutAndNumber}>About and phone number</Text>
        <Text style={styles.statusText}>Hey there! I am using HashTag</Text>
        <Text style={styles.phoneNumberText}>234 9034595050</Text>

        <View style={styles.signUpButton}>
          <TouchableOpacity
            style={styles.button}
            underlayColor='#fff'
            >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
