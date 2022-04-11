import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
        const [isRegistering, setIsRegistering] = useState(false);

        const signupHandler = async ({email,password})=>{
          setIsRegistering(true);
          try{
            await createUser(email,password);
          }catch(error){
            Alert.alert("Signing Up Failed !","Could not sign you up. PLease try again  !")
          }
          setIsRegistering(false);
        }
        if(isRegistering) return <LoadingOverlay message="Creating a New User..." / >
        return <AuthContent onAuthenticate={signupHandler} />;
}


export default SignupScreen;