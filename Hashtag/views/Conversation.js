/* eslint no-nested-ternary: 0 */

import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ProgressViewIOS,
  View,
  ImageBackground,
  FlatList
} from 'react-native';
import styles from '../styles/conversation';
import read from '../assets/images/read.png';
import sent from '../assets/images/sent.png';
import delivered from '../assets/images/delivered.png';
import camera from '../assets/images/iconCamera.png';
import wallpaper from '../assets/images/wallpaper2.jpeg';
import personIcon from '../assets/images/personIcon.png';
import playButton from '../assets/images/play.png';
import github from '../assets/images/github.png';
import pauseButton from '../assets/images/pause.png';
import videoCam from '../assets/images/videoCam.png';
import callIcon from '../assets/images/call.png';
import backButton from '../assets/images/chevronLeft.jpg';

const sampleMessages = [
  {
    key: '0',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample',
    time: '2:30 pm',
    isSender: false,
    status: 'read'
  },
  {
    key: '1',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample message I am sending to you for testing how messages look This is a sample message I am sending to you for testing how messages look',
    time: '2:30 pm',
    isSender: false,
    status: 'read'
  },
  {
    key: '2',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample message I am sending to you for testing how messages look',
    time: '2:30 pm',
    isSender: true,
    status: 'read'
  },
  {
    key: '3',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample message I am sending to you for testing how messages look',
    time: '2:30 pm',
    isSender: false,
    status: 'read'
  },
  {
    key: '4',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample message I am sending to you for testing how messages look',
    time: '2:30 pm',
    isSender: false,
    status: 'delivered'
  },
  {
    key: '5',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample message I am sending to you for testing how messages look',
    time: '2:30 pm',
    isSender: true,
    status: 'sent'
  },
  {
    key: '6',
    type: 'text',
    fileSource: { file: null },
    text: 'This is a sample message I am sending to you for testing how messages look',
    time: '2:30 pm',
    isSender: true,
    status: 'sent'
  },
  {
    key: '7',
    type: 'video',
    time: '2:50 pm',
    fileSource: { file: personIcon },
    isSender: true,
    status: 'sent',
    durationText: '02:00'
  },
  {
    key: '8',
    type: 'audio',
    time: '2: 45 pm',
    fileSource: { file: personIcon },
    isSender: false,
    status: 'sent',
    durationText: '02:00'
  },
  {
    key: '9',
    type: 'image',
    time: '2: 45 pm',
    fileSource: { file: github },
    isSender: true,
    status: 'sent'
  },
  {
    key: '10',
    type: 'image',
    time: '2: 45 pm',
    fileSource: { file: personIcon },
    isSender: false,
    status: 'sent'
  }
];
export default class Conversation extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      // title: params ? params.title : 'Conversation',
      title: <TitleBar/>,
      backTitle: '',
      headerRight: <RightButtons/>
    };
  };

  renderSeparator() {
    this.stub = null;
    return <View style={styles.separator}></View>;
  }
  render() {
    this.state = { };
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ resizeMode: 'stretch' }}
          source={wallpaper}
          style={{}}
        >
          <View style={styles.messagesView}>
            <FlatList
              data={sampleMessages}
              ItemSeparatorComponent={ this.renderSeparator }
              renderItem={ ({ item }) => <Message message={item} />}
            >
            </FlatList>
          </View>
      </ImageBackground>
      </View>
    );
  }
}

class Message extends Component {

  renderStatusIcon() {
    const { message } = this.props;
    const messageStatus = message.status;
    switch (messageStatus) {
      case 'read': return <Image style={styles.statusIcon} source={read}/>;
      case 'delivered': return <Image style={styles.statusIcon} source={delivered}/>;
      case 'sent': return <Image style={styles.statusIcon} source={sent}/>;
      default: return <Image style={styles.statusIcon} source={sent}/>;
    }
  }

  renderTextMessage() {
    const { message } = this.props;
    return <View>
              {
                message.isSender ? (
                  <View style={styles.sentView}>
                    <Text style={styles.messageText}>{message.text}</Text>
                    <View style={styles.timeView}>
                      <Text style={styles.timeText}>{message.time}</Text>
                      {
                        this.renderStatusIcon()
                      }
                    </View>
                  </View>
                ) : (
                  <View style={styles.receivedView}>
                    <Text style={styles.messageText}>{message.text}</Text>
                    <View style={styles.timeView}>
                      <Text style={styles.timeText}>{message.time}</Text>
                    </View>
                  </View>
                )
              }
            </View>;
  }

  renderMediaMessage() {
    const { message } = this.props;
    switch (message.type) {
      case 'audio':
        return <View>
          <View style={styles.audioMessageView}>
              <View style={styles.audioView}>
                <Image style={styles.messageProfileImage} source={personIcon}/>
                <TouchableOpacity>
                  <Image style={styles.playButton} source={ playButton }/>
                </TouchableOpacity>
                <ProgressViewIOS style={styles.progressView} progress={0.2} progressTintColor='yellow'></ProgressViewIOS>
              </View>
              <View style={styles.audioInfoView}>
                <Text style={styles.durationText}>{message.durationText}</Text>
                <View style={styles.timeView}>
                  <Text style={styles.timeText}>{message.time}</Text>
                  {
                    message.isSender ? (
                      this.renderStatusIcon()
                    ) : (
                      <View/>
                    )
                  }
                </View>
              </View>
          </View>
          </View>;
      case 'image':
        return <View>
            <View style={styles.pictureMessageView}>
              <TouchableOpacity>
              <Image style={styles.pictureMessage} source={message.fileSource.file}/>
              </TouchableOpacity>
              <View style={styles.timeView}>
                <Text style={styles.timeText}>{message.time}</Text>
                {
                  message.isSender ? (
                    this.renderStatusIcon()
                  ) : (
                    <View/>
                  )
                }
              </View>
            </View>
          </View>;
      case 'video':
        return <View>
            <View style={styles.pictureMessageView}>
              <TouchableOpacity>
                <Image style={styles.pictureMessage} source={personIcon}/>
                <View style={styles.playButtonView}>
                  <View style={styles.videoPlayButtonCircle}>
                    <Image style={styles.videoPlayButton} source={playButton}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.timeView}>
                <Text style={styles.timeText}>{message.time}</Text>
                {
                  this.renderStatusIcon()
                }
              </View>
            </View>
          </View>;
      default: return <View></View>;
    }
  }


  render() {
    this.state = {};
    const { message } = this.props;
    return (
      <View>
        {
          message.type === 'text' ? (
              this.renderTextMessage()
          ) : (
              message.isSender ? (
                <View style={styles.messageSentView}>
                  {
                    this.renderMediaMessage()
                  }
                </View>
              ) : (
                <View style={styles.messageReceivedView}>
                  {
                    this.renderMediaMessage()
                  }
                </View>
              )
          )
        }
      </View>
    );
  }
}

class TitleBar extends Component {
  render() {
    this.state = {};
    return (
      <View style={styles.headerView}>
        <Image source={github} style={styles.userImageView}/>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.lastSeen}>Today, 02:39 pm</Text>
        </View>
      </View>
    );
  }
}

class RightButtons extends Component {
  render() {
    this.state = {};
    return (
      <View style={styles.callIcons}>
        <TouchableOpacity>
          <Image style={styles.callIcon} source={callIcon}/>
        </TouchableOpacity>
      </View>
    );
  }
}
