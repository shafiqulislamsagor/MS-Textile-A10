import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile ,GoogleAuthProvider} from "firebase/auth";
import auth from './../../firebase.config';

export const ApiContext = createContext(null)

const Context = ({ children }) => {
    const [loader,setLoader] = useState(false)

    const [user, setUser] = useState(null)

    const [data, setData] = useState([])


    // User Register and create

    const registerUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User login 

    const LoginUser = (email, password) => {
        setLoader(false)
        return (
            signInWithEmailAndPassword(auth, email, password)

        )
    }

    // User Update Profile

    const UpdateProfile = (name, photo) => {
        setLoader(false)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    // User LogOut

    const LogOut = () => {
        setLoader(false)
        return (
            signOut(auth).then(() => {
                // Sign-out successful.
                console.log('logout');
            }).catch(() => {
                // An error happened.
            })
        )
    }


    // google logIn 
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleLogIn = () =>{
        setLoader(false)
        return signInWithPopup(auth,GoogleProvider)
    }





    useEffect(() => {
        fetch('http://localhost:4000/')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoader(true)
            setUser(user)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const value = {loader, user, data, registerUser, UpdateProfile, LogOut, LoginUser , GoogleLogIn }
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