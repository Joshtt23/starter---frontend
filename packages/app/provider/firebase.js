import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Ensure correct import based on your export

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe(); // Clean up the subscription
    }, []);

    return (
        <FirebaseContext.Provider value={{ user }}>
            {children}
        </FirebaseContext.Provider>
    );
};
