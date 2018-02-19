import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  FlatList
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../styles/chats';
import read from '../assets/images/read.png';
import sent from '../assets/images/sent.png';
import delivered from '../assets/images/delivered.png';
import camera from '../assets/images/iconCamera.png';
import videoCam from '../assets/images/videoCam.png';
import audio from '../assets/images/audio.png';
import github from '../assets/images/github.png';
import editChats from '../assets/images/penOnPaper.png';
import trash from '../assets/images/trash.png';

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
    backgroundColor: 'red',
    hasProfileImage: true,
    profileImage: github
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
      isSender: true,
    },
    backgroundColor: 'green',
    hasProfileImage: false,
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
      isSender: false,
    },
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
  {
    key: '4',
    name: 'Faith Doe',
    unreadCount: 3,
    lastMessage: {
      type: 'video',
      message: 'This is a very long message but I\'ll like to see how it displays on the app',
      time: '5:30 pm',
      status: 'delivered',
      isSender: false,
    },
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
  {
    key: '5',
    name: 'Faith Doe',
    lastMessage: {
      type: 'audio',
      time: '5:30 pm',
      status: 'delivered',
      isSender: true,
    },
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
];

export default class Chats extends Component {
  static navigationOptions = {
    title: 'CHATS',
    headerBackTitle: null,
    headerLeft: <TouchableOpacity>
      <Text style={{ marginLeft: 12 }}>Edit</Text>
      </TouchableOpacity>,
    headerRight: <TouchableOpacity>
        <Image source={editChats} style={{ width: 20, height: 20, marginRight: 10 }}/>
      </TouchableOpacity>
  };

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
            ListHeaderComponent= { <HeaderComponent/> }
            ItemSeparatorComponent={ this.renderSeparator }
            renderItem={ ({ item }) => <Chat navigation={ this.props.navigation } chat={item} />}
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

  nagigateToConversation() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate('Conversation', { title: 'Johnny Rich' });
    }
  }

  renderLastMessage() {
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

  renderProfileImage() {
    const { chat } = this.props;
    const firstLetter = chat.name.charAt(0);
    const { backgroundColor } = this.props.chat;
    if (chat.hasProfileImage) {
      return <Image style={styles.userImageView} source={chat.profileImage}/>;
    }
    return <View style={[styles.userImageView, { backgroundColor }]}>
            <Text style={styles.firstLetter}>{firstLetter}</Text>
      </View>;
  }
  render() {
    this.state = { deleteItems: false };
    const { chat } = this.props;
    const { lastMessage } = this.props.chat;
    return (
      <TouchableOpacity
            onPress={ () => this.nagigateToConversation() }
      >
        <View style={styles.chatView}>
          <View>
            {
              this.renderProfileImage()
            }
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
          <View style={{ flexDirection: 'row' }}>
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
            {
              this.state.deleteItems ? (
                <CheckBox
                  checked={true}
                  title={null}
                  containerStyle={styles.checkboxView}
                />
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


class HeaderComponent extends Component {
  render() {
    this.state = {};
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>Chats</Text>
        <View style={styles.searchView}>
          <TextInput
            placeholder="Search"
            style={styles.searchField}
          />
        </View>
      </View>
    );
  }
}
