import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './contact-lists/2/screens/Profile';
import StackNavigator from './contact-lists/2/routes';
import Favourites from './contact-lists/3/screens/Favourites';
import User from './contact-lists/3/screens/User';
import TabNavigator from './contact-lists/2/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <TabNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
