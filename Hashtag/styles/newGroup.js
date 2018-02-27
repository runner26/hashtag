import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  chatView: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  userImageView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  firstLetter: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  contactInfoView: {
    paddingTop: 6,
    paddingBottom: 6,
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
    marginRight: 5
  },
  timeView: {
    width: 60,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

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
    height: 0.5,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 60
  },
  fullSeparator: {
    height: 0.5,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginTop: 1,
    marginBottom: 1,
  },
  searchView: {
    padding: 5,
  },
  pageTitle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  searchField: {
    borderRadius: 8,
    backgroundColor: 'rgba(196, 196, 200, .5)',
    height: 30,
    padding: 5,
  },
  checkboxView: {
    width: 10,
    height: 10,
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 5
  },
  topRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nextTextView: {
    position: 'absolute',
    right: 10,
  },
  cancelTextView: {
    position: 'absolute',
    left: 10,
  },
  cancelText: {
    color: 'red'
  },
  newGroupView: {
    alignItems: 'center'
  },
  newGroupImageView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    padding: 5
  },
  newGroupImage: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  newGroupText: {
    fontWeight: 'bold',
    color: 'green'
  },
  nextText: {

  }
});
