import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import StatScreen from './screens/StatScreen';
import Colors from './constants/colors';

export default function App() {
  const [playerObject, setPlayerObject] = useState({});

  let screen = <StatScreen />

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundMain,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
