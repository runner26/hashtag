import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  FlatList
} from 'react-native';
import styles from '../styles/newGroupInfo';
import github from '../assets/images/github.png';
import group from '../assets/images/groupOfPeople.png';
import close from '../assets/images/close.png';

const sampleMembers = [
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
  {
    key: '6',
    name: 'Faith Doe',
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
  {
    key: '7',
    name: 'Faith Doe',
    backgroundColor: 'blue',
    hasProfileImage: false,
  },
  {
    key: '8',
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
        <View style={styles.groupInfoContainer}>
          <View style={styles.groupImageView}>
            <TouchableOpacity>
              <Image source={group} style={styles.newGroupImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.groupInputView}>
            <View style={styles.newSeparator}/>
              <TextInput
                clearButtonMode='while-editing'
                placeholder="Group Title"
              />
            <View style={styles.newSeparator}/>
          </View>
          <Text style={styles.groupInstructionView}>Please provide a group subject and optional group icon</Text>
        </View>
        <View style={styles.participantsCount}><Text style={styles.countText}>Participants: 1/250</Text></View>
          <FlatList
            data={sampleMembers}
            numColumns={5}
            style={[styles.membersList]}
            contentContainerStyle={ styles.contentContainerStyle }
            renderItem={ ({ item }) =>
              <NewMember navigation={ this.props.navigation } member={item} />}
          >
          </FlatList>
      </View>
    );
  }
}


class NewMember extends Component {
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
    const { member } = this.props;
    const firstLetter = member.name.charAt(0);
    const { backgroundColor } = this.props.chat;
    if (member.hasProfileImage) {
      return <Image style={styles.userImageView} source={member.profileImage}/>;
    }
    return <View style={[styles.userImageView, { backgroundColor }]}>
            <Text style={styles.firstLetter}>{firstLetter}</Text>
      </View>;
  }
  render() {
    const { member } = this.props;
    return (
      <View style={styles.listItemView}>
        <View style={styles.userIconView}>
          <Image style={styles.userIcon} source={member.profileImage}/>
          <TouchableOpacity style={styles.cancelIconView}>
            <Image style={styles.cancelIcon} source={close}/>
          </TouchableOpacity>
        </View>
        <Text numberOfLines={1} style={styles.nameText}>{ member.name }</Text>
      </View>
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
            <Text style={styles.backText}>Back</Text>
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
