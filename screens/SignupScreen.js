import React, { useState, useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
        const [isRegistering, setIsRegistering] = useState(false);
        const authCtx = useContext(AuthContext);
        const signupHandler = async ({email,password})=>{
          setIsRegistering(true);
          try{
            const token = await createUser(email,password);
            authCtx.authenticate(token);
          }catch(error){
            Alert.alert("Signing Up Failed !","Could not sign you up. PLease try again  !")
          }
          setIsRegistering(false);
        }
        if(isRegistering) return <LoadingOverlay message="Creating a New User..." / >
        return <AuthContent onAuthenticate={signupHandler} />;
}


export default SignupScreen;