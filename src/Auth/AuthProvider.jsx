import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GithubAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    

    // get the user
    const [user, setUser] = useState(null);

    console.log("user ase?",user)

    // social auth Providers
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // create a user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login the user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    };

    // GitHub login
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    };

    // logout
    const loggedOut = () => {
        setUser(null);
        signOut(auth)
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
            } 
          });

          return () => {
            return unsubscribe();
        }
    }, []);

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        loggedOut,
        user,
    };

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;