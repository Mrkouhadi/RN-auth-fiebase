import axios from "axios";

const API_KEY = "AIzaSyAlOjfCkrGF8NBbtr2xSGuEexUpWkSrMcw"
const BACKEND_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;


const createUser = async (email, password)=>{
    const response = await axios.post(BACKEND_URL, {
                        email, 
                        password, 
                        returnSecureToken:true
                    });
}