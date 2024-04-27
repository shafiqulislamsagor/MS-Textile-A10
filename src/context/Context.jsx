import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './../../firebase.config';

export const ApiContext = createContext(null)

const Context = ({ children }) => {

    const [user, setUser] = useState(null)

    const [data, setData] = useState([])


    // User Register and create

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User login 

    const LoginUser = (email,password) => {
        return (
            signInWithEmailAndPassword(auth, email, password)
                
        )
    }

// User Update Profile

const UpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}


// User LogOut

const LogOut = () => {
    return (
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(() => {
            // An error happened.
        })
    )
}





useEffect(() => {
    fetch('http://localhost:4000/')
        .then(res => res.json())
        .then(data => setData(data))
}, [])

const current = auth.currentUser
useEffect(() => {
    setUser(current)
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if(current){
            setUser(current)
        }
        else(
            setUser(user)
        )
    })
    return () => {
        unSubscribe()
    }
}, [current])


const value = {user, data, registerUser, UpdateProfile, LogOut , LoginUser }
return (
    <ApiContext.Provider value={value}>
        {children}
    </ApiContext.Provider>
);
};

export default Context;

Context.propTypes = {
    children: PropTypes.node
}