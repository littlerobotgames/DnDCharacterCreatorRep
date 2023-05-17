import { StyleSheet, Alert } from "react-native";
import { useState, useContext } from "react";

import Colors from "../../constants/colors";
import LoadingOverlay from '../../components/UI/LoadingOverlay'
import AuthContent from "../../components/auth/AuthContent";
import { AuthContext } from "../../context/authContext";

import { login } from "../../util/auth";

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed!', 'Could not log you in. Please check your credentials or try again later!');
      console.log(error);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    <LoadingOverlay message="Logging in..." />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundMain
    }
})