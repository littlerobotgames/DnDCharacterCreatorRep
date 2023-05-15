import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StatScreen from './screens/StatScreen';
import ClassScreen from './screens/ClassScreen';
import PlayerContextProvider, {PlayerContext} from './context/playerContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
      <PlayerContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name="StatScreen"
            component={StatScreen}
            options={{
              title: 'Stats'
            }}
          />
          <Stack.Screen
            name="ClassScreen"
            component={ClassScreen}
            options={{
              title: 'Classes'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </PlayerContextProvider>
    </>
  );
}

App.defaultProps = PlayerContext;