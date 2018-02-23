import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;
const maxMessageWidth = width - 50;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    margin: 0
  },
  messagesView: {
    height,
  },
  receivedView: {
    maxWidth: maxMessageWidth,
    minWidth: 45,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    margin: 4,
    padding: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: 'row',
    paddingBottom: 16
  },
  sentView: {
    width: maxMessageWidth,
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(191, 247, 142)',
    margin: 4,
    padding: 2,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: 'row',
    paddingBottom: 16,
    justifyContent: 'flex-end'
  },
  messageText: {
    fontSize: 14
  },
  timeView: {
    position: 'absolute',
    right: 8,
    bottom: 0,
    height: 15,
    width: 57,
    paddingBottom: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    textAlign: 'center',
    fontSize: 10
  },
  timeText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'rgba(120, 150, 150, 1)'
  },
  statusIcon: {
    marginLeft: 5
  },
  separator: {
    height: 1,
    backgroundColor: 'transparent',
    marginTop: 0.5,
    marginBottom: 0.5,
    marginLeft: 60
  },
  audioMessageView: {
    flexDirection: 'column',
    width: 250,
    height: 50,
    justifyContent: 'center',
  },
  audioView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  messageProfileImage: {
    width: 40,
    height: 40
  },
  playButton: {
    width: 35,
    height: 35
  },
  progressView: {
    height: 1,
    flex: 1,
    marginRight: 10
  },
  audioInfoView: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    height: 15,
    width: 150,
    bottom: 1,
    right: 3,
  },
  messageReceivedView: {
    alignSelf: 'flex-start',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
    margin: 4,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  messageSentView: {
    alignSelf: 'flex-end',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'rgb(191, 247, 142)',
    margin: 4,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pictureMessageView: {
    width: 250,
    height: 260,
    alignItems: 'center',
    margin: 5
  },
  pictureMessage: {
    width: 240,
    height: 240,
    marginBottom: 30
  },
  videoMessageView: {
    width: 250,
    height: 260,
    alignItems: 'center',
    margin: 5
  },
  playButtonView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoPlayButtonCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(1, 1, 1, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoPlayButton: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: 200,
  },
  backButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 45,
    backgroundColor: 'red'
  },
  userImageView: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    marginRight: 5
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 45,
    padding: 4,
    flex: 1
  },
  nameText: {
    fontSize: 16
  },
  lastSeen: {
    fontSize: 12
  },
  callIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});
