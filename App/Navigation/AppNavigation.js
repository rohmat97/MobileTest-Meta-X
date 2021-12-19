import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import {HomePage} from '../Containers/home/';
import {ResultPage} from '../Containers/result';
import {TagsPage} from '../Containers/tags';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  home: { screen: HomePage },
  result: { screen: ResultPage },
  tags: { screen: TagsPage },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
