import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import { createUser } from '../../util/auth';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import { AuthContext } from '../../context/authContext';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user, please check your input and try again later.');
      console.log(error);
      setIsAuthenticating(false);
    }  
  }

  if (isAuthenticating) {
    <LoadingOverlay message="Creating user..." />
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;