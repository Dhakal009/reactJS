import { createContext, useEffect, useState } from "react";
import api from "../services/api.js";


export const AuthContext = createContext();


function AuthProvider({children}){
    const [user, setuser] = useState(null)
    const [token, settoken] = useState(
        localStorage.getItem("token")
    );


    useEffect(() => {
      if(token){
        getCurrentUser();
      }
    }, [token])


    const getCurrentUser = async ()=>{
        try{
            const response = await api.get("/auth/me",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            setuser(response.data.user)

        }catch(err){
            console.error(err)
            logout();
        }
    }

    const login = (token,user)=>{
        localStorage.setItem("token",token);

        settoken(token);
        setuser(user);
    };

    const logout = ()=>{
        localStorage.removeItem("token")

        settoken(null)
        setuser(null)
    }


    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )

    
}


export default AuthProvider;