import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  FlatList
} from 'react-native';
import styles from '../styles/calls';
import camera from '../assets/images/iconCamera.png';
import videoCam from '../assets/images/videoCam.png';
import callMade from '../assets/images/makeCall.png';
import callReceived from '../assets/images/receiveCall.png';
import callIcon from '../assets/images/call.png';
import addCall from '../assets/images/addCall.png';

const sampleChats = [
  {
    key: '1',
    unreadCount: 0,
    name: 'Johnny Rich',
    lastCall: {
      message: 'Hello',
      type: 'audio',
      time: 'Today, 5:30 pm',
      isSender: true,
    },
    backgroundColor: 'red'
  },
  {
    key: '2',
    unreadCount: 5,
    name: '09034595050',
    lastCall: {
      fileSource: { file: camera },
      type: 'video',
      time: 'Today, 02:31 pm',
      isSender: true
    },
    backgroundColor: 'green'
  },
  {
    key: '3',
    unreadCount: 0,
    name: 'Faith Doe',
    lastCall: {
      type: 'audio',
      message: 'This is a very long message but I\'ll like to see how it displays on the app',
      time: 'Yesterday, 10:34 pm',
      status: 'delivered',
      isSender: false
    },
    backgroundColor: 'blue'
  },
  {
    key: '4',
    name: 'Faith Doe',
    unreadCount: 3,
    lastCall: {
      type: 'video',
      message: 'This is a very long message but I\'ll like to see how it displays on the app',
      time: '15/02/2018, 11:26 pm',
      isSender: false
    },
    backgroundColor: 'blue'
  },
  {
    key: '5',
    name: 'Faith Doe',
    lastCall: {
      type: 'audio',
      time: '15/02/2018, 11:26 am',
      isSender: true
    },
    backgroundColor: 'blue'
  },
];

export default class Calls extends Component {
  static navigationOptions = {
    title: 'CALLS',
    headerLeft: <TouchableOpacity>
      <Text style={{ marginLeft: 12 }}>Edit</Text>
      </TouchableOpacity>,
    headerRight: <TouchableOpacity>
        <Image source={addCall} style={{ width: 20, height: 20, marginRight: 10 }}/>
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
            renderItem={ ({ item }) => <Call call={item} />}
          >
          </FlatList>
      </View>
    );
  }
}


class Call extends Component {
  renderCallIcon() {
    const { lastCall } = this.props.call;
    return <View>
      {
        lastCall.isSender ? (
          <Image style={styles.statusIcon} source={callMade}/>
        ) : (
          <Image style={styles.statusIcon} source={callReceived}/>
        )
      }
    </View>;
  }

  renderCallTime() {
    const { lastCall } = this.props.call;
    return <View style={styles.isPhotoView}>
            <Text numberOfLines={1} style={styles.lastMessageText}>
              {lastCall.time}</Text>
          </View>;
  }

  render() {
    this.state = { deleteItems: false };
    const { call } = this.props;
    const { backgroundColor } = this.props.call;
    const firstLetter = call.name.charAt(0);
    return (
      <TouchableOpacity>
        <View style={styles.chatView}>
          <View style={[styles.userImageView, { backgroundColor }]}>
            <Text style={styles.firstLetter}>{firstLetter}</Text>
          </View>
          <View style={styles.contactInfoView}>
            <Text style={styles.userName}>{call.name}</Text>
            <View style={styles.lastMessageView}>
              {
                this.renderCallIcon()
              }
              {
                this.renderCallTime()
              }
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.callIconView}>
              {
                call.lastCall.type === 'video' ? (
                  <Image style={styles.callIcon} source={videoCam}/>
                ) : (
                  <Image style={styles.callIcon} source={callIcon}/>
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
        <Text style={styles.pageTitle}>Calls</Text>
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
