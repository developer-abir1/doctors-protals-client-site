import React, { createContext } from 'react';
import useFirebase from '../hook/useFirebse';

export const AuthContext = createContext(null)

const AuthProviver = ({ children }) => {
    const allContexts = useFirebase()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviver;