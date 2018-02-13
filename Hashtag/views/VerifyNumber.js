import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import styles from '../styles/verifyNumber';

export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={styles.container}>
        <View style={styles.numberVerificationView}>
          <Text style={styles.greenText}>Verify 2349034595050</Text>
          <Text numberOfLines={2} style={styles.waitingText}>
            Waiting to automatically detect SMS sent to 2349034595050</Text>
          <TouchableOpacity>
            <Text style={styles.greenText}>Wrong Number?</Text>
          </TouchableOpacity>
          <View style={styles.codeView}>
            <TextInput
              autoCorrect={false}
              placeholder='--- ---'
              maxLength={6}
              keyboardType='numeric'
              style={styles.codeInputField}
              underlineColorAndroid="transparent"
            style={styles.nameTextInput}>
            </TextInput>
          </View>
          <Text style={styles.enterCode}>Enter 6-digit code</Text>
        </View>
        <View style={styles.separator}/>
        <View style={styles.codeView}>
          <Text style={styles.resendCodeText}>Resend code in 00:30</Text>
          <TouchableOpacity style={styles.callButton}>
            <Text>Call</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
