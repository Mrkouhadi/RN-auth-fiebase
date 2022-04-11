import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = async ({email,password})=>{
    setIsLogin(true);
    await login(email,password);
    setIsLogin(false);
  }
  if(isLogin) return <LoadingOverlay  message="Authenticating..." / >

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
