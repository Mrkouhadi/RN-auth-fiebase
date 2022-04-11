import axios from "axios";

const API_KEY = "AIzaSyAlOjfCkrGF8NBbtr2xSGuEexUpWkSrMcw"

 const authenticate = async(mode, email, password)=>{
    const BACKEND_URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    
    const response = await axios.post(BACKEND_URL, {
                        email, 
                        password, 
                        returnSecureToken:true
                    });
    console.log(response.data);
}
export const createUser = async (email, password) =>{
    await authenticate('signUp', email, password);
}

export const login = async (email, password) =>{
    await authenticate('signInWithPassword', email, password);
}