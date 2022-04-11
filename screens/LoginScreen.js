import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

function LoginScreen() {
    const [isLogin, setIsLogin] = useState(false);

    const loginHandler = async ({email,password})=>{
        setIsLogin(true);
        try{
          await login(email,password);
        }catch(error){
          Alert.alert("Loggin in Failed !","Could not log in you in. PLease double check your credentials !")
        }
        setIsLogin(false);
    }

      if(isLogin) return <LoadingOverlay  message="Authenticating..." / >
      return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
