/* eslint require-jsdoc: 0 */

import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './app/reducers';

// import App from './App';
// import TermsAndConditions from './views/TermsAndConditions';
// import SignUp from './views/Signup';
// import VerifyNumber from './views/VerifyNumber';
// import ProfileInfo from './views/ProfileInfo';
// import Chats from './views/Chats';
// import Conversation from './views/Conversation';
// import Calls from './views/Calls';
// import Explore from './views/Explore';
// import NewChat from './views/NewChat';
// import MainTabBar from './views/MainTabBar';
import RootNavigator from './RootNavigator';
// import NewGroupInfo from './views/NewGroupInfo';

const loggerMiddleeware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(
    thunkMiddleware,
    loggerMiddleeware,
  ));
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

const App = () =>
  <Provider store={store}>
    <RootNavigator/>
  </Provider>;

AppRegistry.registerComponent('Hashtag', () => App);
