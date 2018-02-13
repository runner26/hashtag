import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  numberVerificationView: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greenText: {
    color: 'green',
    marginTop: 15,
    marginBottom: 5
  },
  waitingText: {
    textAlign: 'center',
    marginTop: 20
  },
  codeView: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  codeInputView: {
    alignSelf: 'center'
  },
  enterCode: {
    marginBottom: 20
  },
  resendCodeText: {
    flex: 1
  },
  callButton: {
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginTop: 12,
    marginBottom: 12
  },
  button: {
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: 'rgb(0, 122, 180)',
    borderColor: 'rgb(255, 255, 255)',
    height: 35,
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
    fontSize: 15,
    textAlign: 'center',
  }
});
