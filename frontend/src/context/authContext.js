import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const  AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser]= useState(  JSON.parse(localStorage.getItem("user") || null));

    const login = () =>{
        setCurrentUser({id:1,name:"Komal",profilePic: "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600"})
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser)
        );
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login }}>{children}</AuthContext.Provider>
    )
}