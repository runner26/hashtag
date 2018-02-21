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
import styles from '../styles/newGroupInfo';
import github from '../assets/images/github.png';
import group from '../assets/images/groupOfPeople.png';

const sampleChats = [
  {
    key: '1',
    name: 'Johnny Rich',
    status: 'Just there',
    backgroundColor: 'red',
    hasProfileImage: true,
    profileImage: github
  },
  {
    key: '2',
    unreadCount: 5,
    name: '09034595050',
    status: 'Loving me',
    backgroundColor: 'green',
    hasProfileImage: false,
  },
  {
    key: '3',
    name: 'Faith Doe',
    status: 'This is a very long message but I\'ll like to see how it displays on the app',
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
  {
    key: '4',
    name: 'Faith Doe',
    unreadCount: 3,
    status: 'This is a very long message but I\'ll like to see how it displays on the app',
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
  {
    key: '5',
    name: 'Faith Doe',
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
];

export default class NewGroup extends Component {
  static navigationOptions = ({ navigation }) =>
    ({
      header: <HeaderComponent navigation={navigation}/>
    })


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
            renderItem={ ({ item }) =>
              <Chat navigation={ this.props.navigation } chat={item} />}
          >
          </FlatList>
      </View>
    );
  }
}


class Chat extends Component {
  nagigateToConversation() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate('Conversation', { title: 'Johnny Rich' });
    }
  }

  renderStatus() {
    const { status } = this.props.chat;
    return <Text numberOfLines={1} style={styles.lastMessageText}>
          {status}</Text>;
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
    this.state = { deleteItems: true };
    const { chat } = this.props;
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
                this.renderStatus()
              }
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
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
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.cancelTextView}
            onPress={ () => this.props.navigation.goBack() }
          >
            <Text style={styles.nextText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>New Group</Text>
          <TouchableOpacity
            style={styles.createTextView}
            onPress={ () => this.props.navigation.goBack() }
          >
          <Text style={styles.nextText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class GroupInfoEntry extends Component {
  navigateToNewGroup() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate('NewGroup');
    }
  }
  render() {
    return <TouchableOpacity
      onPress={ () => this.navigateToNewGroup() }
    >
      <View style={styles.chatView}>
            <View style={styles.newGroupImageView} >
              <Image style={styles.newGroupImage} source={group}/>
            </View>
            <View style={styles.newGroupView}>
              <Text style={styles.newGroupText}>New Group</Text>
            </View>
        </View>
        <View style={styles.fullSeparator}/>
      </TouchableOpacity>;
  }
}
