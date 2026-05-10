import { createContext, useContext, useState } from "react";

export  const AuthContext=createContext();
export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("User");
   console.log(initialAuthUser);
    const [Authuser,setAuthUser]=useState(
        initialAuthUser ?JSON.parse(initialAuthUser):undefined
    );
    return(
        <AuthContext.Provider value={[Authuser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )


    
}
export const useAuth=()=> useContext(AuthContext);