import initializeAuth from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

initializeAuth()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    //user register
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name }
                setUser(newUser);

                // save user to the database
                saveUser(email, name)

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false))
    }

    //user login
    const loginUser = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false))


    }

    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    //user sign out
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    // save user to database
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        axios.post('https://peaceful-ocean-15686.herokuapp.com/users', user)
            .then()
    }

    // admin check
    useEffect(() => {
        fetch(`https://peaceful-ocean-15686.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        registerUser,
        loginUser,
        logout,
        isLoading,
    }
}

export default useFirebase;