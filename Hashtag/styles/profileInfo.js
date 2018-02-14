import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1
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
  nameText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center'
  },
  editIcon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  notUserNameView: {
    backgroundColor: 'rgba(196, 196, 200, 1)',
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  },
  notUserNameText: {
    fontSize: 12,
    color: 'grey'
  },
  aboutAndNumber: {
    color: 'rgba(0, 122, 180, 0.8)',
    textAlign: 'center',
    fontSize: 15
  },
  statusText: {
    textAlign: 'center',
    fontSize: 15,
    margin: 15
  },
  phoneNumberText: {
    textAlign: 'center',
    fontSize: 16
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
  }
});
