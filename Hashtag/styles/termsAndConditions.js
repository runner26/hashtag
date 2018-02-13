import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  },
  splashImageView: {
    backgroundColor: 'white'
  },
  splashImage: {
    resizeMode: 'contain',
    flex: 1
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white'
  },
  termsText: {
    backgroundColor: 'transparent',
    height: 40,
    textAlign: 'center',
  },
  termsLink: {
    color: 'green',
    alignSelf: 'center'
  },
  button: {
    flexDirection: 'row'
  },
  buttonImage: {
    flex: 1,
    resizeMode: 'contain',
    marginLeft: 10,
    marginRight: 10,
    height: 50
  }
});
