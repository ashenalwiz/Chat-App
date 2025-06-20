import React from 'react';
import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState({});
    


    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log("User is logged in:", user);
            
        });
        return() => {
            unsub();
        }

    },[]);
    
   return (
    <AuthContext.Provider value={{ currentUser }}>
        {children}
    </AuthContext.Provider>

    );
   

    
}
