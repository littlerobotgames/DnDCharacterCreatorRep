import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StatScreen from './screens/create_char/StatScreen';
import ClassScreen from './screens/create_char/ClassScreen';
import PlayerContextProvider, {PlayerContext} from './context/playerContext';
import LoginScreen from './screens/login/LoginScreen';
import SignupScreen from './screens/login/SignupScreen';
import AuthContextProvider, { AuthContext } from './context/authContext';

const Stack = createNativeStackNavigator();

function CharacterCreateStack() {
  return (
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
  );
}

function LoginStack() {
  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
      <Stack.Screen 
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login'
        }}
      />
      <Stack.Screen 
        name="SignupScreen"
        component={SignupScreen}
      />
      </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(PlayerContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <LoginStack />}
      {authCtx.isAuthenticated && <CharacterCreateStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
      <PlayerContextProvider>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </PlayerContextProvider>
    </>
  );
}

App.defaultProps = PlayerContext;