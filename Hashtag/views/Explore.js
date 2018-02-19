import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/explore';
import friendsIcon from '../assets/images/friends.png';
import momentIcon from '../assets/images/shareMoment.png';
import favoritesIcon from '../assets/images/favorite.png';
import qrCodeIcon from '../assets/images/qrCode.png';


const exploreMenu = [
  {
    key: '1',
    title: 'Friends Nearby',
    icon: friendsIcon
  },
  {
    key: '2',
    title: 'Moment Sharing',
    icon: momentIcon
  },
  {
    key: '3',
    title: 'Favorite',
    icon: favoritesIcon
  },
  {
    key: '4',
    title: 'Scan QR Code',
    icon: qrCodeIcon
  }
];

export default class Explore extends Component {
  static navigationOptions = {
    title: 'EXPLORE',
    headerLeft: null
  };

  renderSeparator() {
    this.stub = null;
    return <View style={styles.separator}></View>;
  }

  render() {
    this.state = {};
    return (
      <View style={styles.container}>
          <FlatList
            data={ exploreMenu }
            renderItem={ ({ item }) => <ListItem itemDetails={item} />}
          >
          </FlatList>
      </View>
    );
  }
}

class ListItem extends Component {
  render() {
    const { itemDetails } = this.props;
    return (
      <View>
      <TouchableOpacity>
        <View style={styles.listItemView}>
          <Image style={styles.icon} source={itemDetails.icon} />
          <Text style={styles.title}>{itemDetails.title}</Text>
        </View>
      </TouchableOpacity>
        <View style={styles.separator}></View>
      </View>
    );
  }
}

