import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import StatScreen from './screens/StatScreen';
import Colors from './constants/colors';
import ClassScreen from './screens/ClassScreen';

export default function App() {
  const [playerObject, setPlayerObject] = useState({str: 8, dex: 8, con: 8, int: 8, win: 8, cha: 8});
  const [screen, setScreen] = useState(0);

  function advanceScreen() {
    setScreen(screen + 1)
  }

  function getScreenContent() {
    switch (screen) {
      case 0:
        return <StatScreen setPlayerObject={setPlayerObject} nextScreen={advanceScreen}/>;
      case 1:
        return <ClassScreen />
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {getScreenContent()}
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
