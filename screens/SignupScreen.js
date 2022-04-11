import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';

function SignupScreen() {

  const signupHandler = ()=>{
    createUser();
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
