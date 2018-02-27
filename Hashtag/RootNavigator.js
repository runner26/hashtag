import { StackNavigator } from 'react-navigation';

import TermsAndConditions from './views/TermsAndConditions';
import SignUp from './views/Signup';
import VerifyNumber from './views/VerifyNumber';
import ProfileInfo from './views/ProfileInfo';
import Conversation from './views/Conversation';
import MainTabBar from './views/MainTabBar';
import NewChat from './views/NewChat';
import NewGroup from './views/NewGroup';
import NewGroupInfo from './views/NewGroupInfo';

const RootNavigator = StackNavigator({
  TermsAndConditions: {
    screen: TermsAndConditions
  },
  SignUp: {
    screen: SignUp
  },
  VerifyNumber: {
    screen: VerifyNumber
  },
  ProfileInfo: {
    screen: ProfileInfo
  },
  MainTabBar: {
    screen: MainTabBar
  },
  Conversation: {
    screen: Conversation
  },
  NewChat: {
    screen: NewChat
  },
  NewGroup: {
    screen: NewGroup
  },
  NewGroupInfo: {
    screen: NewGroupInfo
  }
});

export default RootNavigator;
