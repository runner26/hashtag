import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  FlatList
} from 'react-native';
import styles from '../styles/chats';
import read from '../assets/images/read.png';
import sent from '../assets/images/sent.png';
import delivered from '../assets/images/delivered.png';
import camera from '../assets/images/iconCamera.png';
import videoCam from '../assets/images/videoCam.png';
import audio from '../assets/images/audio.png';

const sampleChats = [
  {
    key: '1',
    unreadCount: 0,
    name: 'Johnny Rich',
    lastMessage: {
      message: 'Hello',
      type: 'text',
      time: '5:30 pm',
      status: 'read',
      isSender: true,
    },
    backgroundColor: 'red'
  },
  {
    key: '2',
    unreadCount: 5,
    name: '09034595050',
    lastMessage: {
      fileSource: { file: camera },
      type: 'image',
      time: '5:30 pm',
      status: 'sent',
      isSender: true
    },
    backgroundColor: 'green'
  },
  {
    key: '3',
    unreadCount: 0,
    name: 'Faith Doe',
    lastMessage: {
      type: 'text',
      message: 'This is a very long message but I\'ll like to see how it displays on the app',
      time: '5:30 pm',
      status: 'delivered',
      isSender: false
    },
    backgroundColor: 'blue'
  },
  {
    key: '3',
    name: 'Faith Doe',
    unreadCount: 3,
    lastMessage: {
      type: 'video',
      message: 'This is a very long message but I\'ll like to see how it displays on the app',
      time: '5:30 pm',
      status: 'delivered',
      isSender: false
    },
    backgroundColor: 'blue'
  },
  {
    key: '3',
    name: 'Faith Doe',
    lastMessage: {
      type: 'audio',
      time: '5:30 pm',
      status: 'delivered',
      isSender: true
    },
    backgroundColor: 'blue'
  },
];

export default class Chats extends Component {
  renderSeparator() {
    this.stub = null;
    return <View style={styles.separator}></View>;
  }
  render() {
    this.state = { };
    return (
      <View style={styles.container}>
          <FlatList
            data={sampleChats}
            ItemSeparatorComponent={ this.renderSeparator }
            renderItem={ ({ item }) => <Chat chat={item} />}
          >
          </FlatList>
      </View>
    );
  }
}


class Chat extends Component {

  renderStatusIcon() {
    const { lastMessage } = this.props.chat;
    const messageStatus = lastMessage.status;
    switch (messageStatus) {
      case 'read': return <Image style={styles.statusIcon} source={read}/>;
      case 'delivered': return <Image style={styles.statusIcon} source={delivered}/>;
      case 'sent': return <Image style={styles.statusIcon} source={sent}/>;
      default: return <Image style={styles.statusIcon} source={sent}/>;
    }
  }

  renderLastMessage() {
    const { chat } = this.props;
    const { lastMessage } = this.props.chat;
    switch (lastMessage.type) {
      case 'image':
        return <View style={styles.isPhotoView}>
          <Image source={camera} style={styles.photoImageIcon}/>
            <Text style={styles.lastMessageText}>Photo</Text></View>;
      case 'text':
        return <Text numberOfLines={1} style={styles.lastMessageText}>
          {lastMessage.message}</Text>;
      case 'audio':
        return <View style={styles.isPhotoView}>
          <Image source={audio} style={styles.photoImageIcon}/>
            <Text style={styles.lastMessageText}>Audio</Text></View>;
      case 'video':
        return <View style={styles.isPhotoView}>
          <Image source={videoCam} style={styles.photoImageIcon}/>
            <Text style={styles.lastMessageText}>Video</Text></View>;
      default: return <View/>;
    }
  }

  render() {
    this.state = {};
    const { chat } = this.props;
    const { lastMessage } = this.props.chat;
    const { backgroundColor } = this.props.chat;
    const firstLetter = chat.name.charAt(0);
    return (
      <TouchableOpacity>
        <View style={styles.chatView}>
          <View style={[styles.userImageView, { backgroundColor }]}>
            <Text style={styles.firstLetter}>{firstLetter}</Text>
          </View>
          <View style={styles.contactInfoView}>
            <Text style={styles.userName}>{chat.name}</Text>
            <View style={styles.lastMessageView}>
              {
                lastMessage.isSender ? (
                  this.renderStatusIcon()
                ) : (
                  <View/>
                )
              }
              {
                this.renderLastMessage()
              }
            </View>
          </View>
          <View style={styles.timeView}>
            <Text>{lastMessage.time}</Text>
              {
                chat.unreadCount > 0 ? (
                  <View style={styles.unreadMessagesCountView}>
                    <Text style={styles.unreadMessagesCount}>{chat.unreadCount}</Text>
                  </View>
                ) : (
                  <View/>
                )
              }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
