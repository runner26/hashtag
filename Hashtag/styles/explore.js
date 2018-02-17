import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    margin: 0
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    height: 50
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(196, 196, 200, 1)',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 5
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10
  }
});
