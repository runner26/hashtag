import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    margin: 5
  },
  chatView: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center'
  },
  userImageView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  firstLetter: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  callIcon: {
    width: 35,
    height: 35
  },
  contactInfoView: {
    paddingTop: 2,
    paddingBottom: 2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 50
  },
  userName: {
    fontSize: 16
  },
  isPhotoView: {
    flexDirection: 'row',
  },
  lastMessageView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusIcon: {
    marginRight: 5,
    width: 15,
    height: 15
  },
  callIconView: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15
  },
  unreadMessagesCountView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgb(51, 204, 102)',
    marginRight: 8,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unreadMessagesCount: {
    color: 'white'
  },
  photoImageIcon: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  lastMessageText: {
    color: 'rgba(196, 196, 200, 1)'
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 60
  },
});
