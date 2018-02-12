import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/termsAndConditions';
import termsAndConditions from '../assets/images/termsAndConditions.jpg';
import agreeButton from '../assets/images/agreeButton.png';


export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={styles.container}>
        <View style={styles.splashImageView} >
          <Image style={styles.splashImage} source={termsAndConditions}/>
        </View>
        <View style={styles.footer}>
          <Text style={styles.termsText}>Tap "Agree and Continue" to accept the
            {'\n'}
            <Text style={styles.termsLink}>
              Hastag terms of Service and Privacy Policy</Text>
          </Text>
          <TouchableOpacity style={styles.button} >
            <Image source={agreeButton} style={styles.buttonImage}/>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
