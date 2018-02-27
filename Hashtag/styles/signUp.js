import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  personImageView: {
    marginTop: 80,
    marginBottom: 20,
    alignSelf: 'center'
  },
  personImage: {
    height: 125,
    width: 125
  },
  nameView: {
    flexDirection: 'row'
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginTop: 12,
    marginBottom: 12
  },
  label: {
    width: 80,
    fontSize: 15,

  },
  nameTextInput: {
    flex: 1
  },
  regionView: {
    flexDirection: 'row'
  },
  phoneView: {
    flexDirection: 'row'
  },
  passwordView: {
    flexDirection: 'row'
  },
  button: {
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: 'rgb(0, 122, 180)',
    borderColor: 'rgb(255, 255, 255)',
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 250,
    shadowColor: 'rgba(33, 73, 95, 0.6)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
    padding: 15,
    paddingBottom: 5
  },
  footerText: {
    fontSize: 10,
    color: 'grey'
  }
});
