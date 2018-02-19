import { StackNavigator } from 'react-navigation';

import TermsAndConditions from './views/TermsAndConditions';
import SignUp from './views/SignUp';
import VerifyNumber from './views/VerifyNumber';
import ProfileInfo from './views/ProfileInfo';
import Conversation from './views/Conversation';
import MainTabBar from './views/MainTabBar';

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
});

export default RootNavigator;
