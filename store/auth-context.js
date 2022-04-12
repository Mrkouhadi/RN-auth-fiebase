const { createContext, useState } = require("react");

export const AuthContext = createContext({
    token:'',
    isAuthenticated:false,
    authenticate:()=>{},
    logOut:()=>{}
});

const AuthContextProvider = ({children}) =>{
    const [authToken, setAuthToken] = useState(null);

    const authenticate=(token)=>{
        setAuthToken(token)
    }
    const logOut=()=>{
        setAuthToken(null)
    }
    const value={
        token:authToken,
        isAuthenticated:!!authToken,
        authenticate:authenticate,
        logOut:logOut,
    };

    return <AuthContext.Provider value={value}>
                {children}
           </AuthContext.Provider>
}
export default AuthContextProvider