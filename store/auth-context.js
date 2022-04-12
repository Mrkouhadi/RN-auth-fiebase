const { createContext, useState } = require("react");

export const AuthContext = createContext({
    token:'',
    authenticated:false,
    authenticate:()=>{},
    logOut:()=>{}
});

const AuthContextProvider = ({children}) =>{
    const [authToken, setAuthToken] = useState();

    const authenticate=(token)=>{
        setAuthToken(token)
    }
    const logOut=()=>{
        setAuthToken(null)
    }
    const value={
        token:'',
        authenticated:authToken,
        authenticate:authenticate,
        logOut:logOut,
    };

    return <AuthContext.Provider value={value}>
                {children}
           </AuthContext.Provider>
}
export default AuthContextProvider