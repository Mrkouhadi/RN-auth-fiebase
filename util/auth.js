import axios from "axios";

const API_KEY = "AIzaSyAlOjfCkrGF8NBbtr2xSGuEexUpWkSrMcw"

 const authenticate = async(mode, email, password)=>{
    const BACKEND_URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    
    const response = await axios.post(BACKEND_URL, {
                        email, 
                        password, 
                        returnSecureToken:true
                    });
    const token = response.data.idToken;
    return token;
}
export const createUser =  (email, password) =>{
    return authenticate('signUp', email, password);
}

export const login =  (email, password) =>{
    return authenticate('signInWithPassword', email, password);
}