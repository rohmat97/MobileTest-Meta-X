import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import {Controller} from '../Containers/Controller'
import {HomePage} from '../Containers/home/';
import {ResultPage} from '../Containers/result';
import {TagsPage} from '../Containers/tags';
import {FriendPage} from '../Containers/friend';
import {ComponentPage} from '../Containers/component';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  controller: { screen: Controller },
  home: { screen: HomePage },
  result: { screen: ResultPage },
  tags: { screen: TagsPage },
  friend: { screen: FriendPage },
  component: { screen: ComponentPage }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'controller',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
