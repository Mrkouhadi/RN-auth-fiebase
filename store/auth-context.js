const { createContext, useState } = require("react");

export const AuthContext = createContext({
    token:'',
    authenticated:false,
    authenticate:()=>{},
});

const AuthContextProvider = ({children}) =>{
    const [authenticated, setAuthenticated] = useState(false);

    const authenticate=()=>{
        setAuthenticated(true)
    }
    const logOut=()=>{
        setAuthenticated(false)
    }
    const value={
        token:'',
        authenticated:authenticated,
        authenticate:authenticate,
        logOut:logOut,
    };

    return <AuthContext.Provider value={value}>
                {children}
           </AuthContext.Provider>
}
export default AuthContextProvider