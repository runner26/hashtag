/* eslint require-jsdoc : 0 */
/* eslint class-methods-use-this: 0 */
/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../app/actions';
import styles from '../styles/signUp';
import personIcon from '../assets/images/personIcon.png';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region: '',
      phone: '',
      password: ''
    };
  }
  static navigationOptions = {
    title: 'Sign Up',
  };
  navigateToVerifyNumber() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate('VerifyNumber');
    }
  }
  signUpUser() {
    let {
      name,
      country,
      phone,
      password
    } = this.refs;
    name = name._lastNativeText;
    country = country._lastNativeText;
    phone = phone._lastNativeText;
    password = password._lastNativeText;
    this.props.signUp(name, country, phone, password);
  }
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
              ref='name'
              style={styles.nameTextInput}>
            </TextInput>
          </View>
          <View style={styles.separator}/>
          <View style={styles.regionView}>
            <Text style={styles.label}>Region</Text>
            <TextInput
              autoCorrect={false}
              placeholder='Country'
              ref='country'
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
              ref='phone'
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
              ref='password'
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            style={styles.nameTextInput}>
            </TextInput>
          </View>

          <View style={styles.separator}/>

        </View>
        <View style={styles.signUpButton}>
          <TouchableOpacity
            onPress={ () => this.navigateToVerifyNumber() }
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

function matchDispatchToPros(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => ({}), matchDispatchToPros)(SignUp);
