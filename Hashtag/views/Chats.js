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

const sampleChats = [
  {
    key: '1',
    name: 'Johnny Rich',
    lastMessage: {
      message: 'Hello',
      isImage: false,
      time: '5:30 pm',
      status: 'read'
    },
    backgroundColor: 'red'
  },
  {
    key: '2',
    name: '09034595050',
    lastMessage: {
      message: 'atSchool.jpg',
      isImage: true,
      time: '5:30 pm',
      status: 'sent'
    },
    backgroundColor: 'green'
  },
  {
    key: '3',
    name: 'Faith Doe',
    lastMessage: {
      isImage: false,
      message: 'This is a very long message but I\'ll like to see how it displays on the app',
      time: '5:30 pm',
      status: 'delivered'
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
    const { lastMessage } = this.props.chat;
    if (!lastMessage.isImage) {
      return <Text numberOfLines={1} style={styles.lastMessageText}>{lastMessage.message}</Text>;
    }
    return <View style={styles.isPhotoView}>
      <Image source={camera} style={styles.photoImageIcon}/>
        <Text style={styles.lastMessageText}>Photo</Text></View>;
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
                this.renderStatusIcon()
              }
              {
                this.renderLastMessage()
              }
            </View>
          </View>
          <View style={styles.timeView}>
            <Text>{lastMessage.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
