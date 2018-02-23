import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0
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
  createTextView: {
    position: 'absolute',
    right: 10,
  },
  createText: {

  },
  cancelTextView: {
    position: 'absolute',
    left: 10
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
  newGroupText: {
    fontWeight: 'bold',
    color: 'green'
  },
  nextText: {
    
  },
  groupInfoContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  groupImageView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newGroupImage: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  newSeparator: {
    height: 0.5,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
    marginTop: 10,
  },
  groupInputView: {
    flex: 1,
    marginLeft: 20
  },
  groupInstructionView: {
    position: 'absolute',
    bottom: 0,
    left: 60,
    fontSize: 11,
    width: 200,
    color: 'rgba(180, 180, 185, 1)',
    lineHeight: 12.5
  },
  participantsCount: {
    backgroundColor: 'rgba(220, 220, 220, .5)',
    padding: 2,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15
  },
  countText: {
    fontSize: 12,
    color: 'rgba(150, 150, 150, 1)'
  },
  membersList: {
    marginLeft: 10,
    marginRight: 10,
  },
  userIconView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cancelIcon: {
    width: 15,
    height: 15,
    borderRadius: 8
  },
  cancelIconView: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 8,
    width: 50,
    textAlign: 'center'
  },
  contentContainerStyle: {
    alignItems: 'center'
  },
  listItemView: {
    alignSelf: 'center',
    margin: 2
  }
});
