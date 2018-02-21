import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';


import App from './App';
import TermsAndConditions from './views/TermsAndConditions';
import SignUp from './views/SignUp';
import VerifyNumber from './views/VerifyNumber';
import ProfileInfo from './views/ProfileInfo';
import Chats from './views/Chats';
import Conversation from './views/Conversation';
import Calls from './views/Calls';
import Explore from './views/Explore';
import NewChat from './views/NewChat';
import MainTabBar from './views/MainTabBar';
import RootNavigator from './RootNavigator';

AppRegistry.registerComponent('Hashtag', () => RootNavigator);
