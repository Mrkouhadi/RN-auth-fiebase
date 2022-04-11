import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
function SignupScreen() {
  const [isRegistering, setIsRegistering] = useState(false);

  const signupHandler = async ({email,password})=>{
    setIsRegistering(true);
    await createUser(email,password);
    setIsRegistering(false);
  }
  if(isRegistering) return <LoadingOverlay message="Creating a New User..." / >
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
