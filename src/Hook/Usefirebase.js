import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () =>{
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const [ user, setUser ] = useState(null)
    const [ authError, setAuthError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect( ()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
                setIsLoading(false)
            }else{
                setUser(null)
                setIsLoading(false)
            }
        })
    },[])

    const googleSignIn = (location,navigator) =>{
        console.log(location,navigator);
        signInWithPopup(auth,provider)
        .then( result =>{
            setUser(result.user)
            const destination = location.state.from || '/';
            navigator(destination)
        })
        .catch( error =>{
            setAuthError(error.message)
        })
    }
    const registerUser = ( user ) =>{
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then( result => {
            setUser(result.user)
            updateProfile(auth.currentUser, {
                displayName: user.name})
                .then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                setAuthError(error.message)
              });
        })
        .catch( error =>{
            setAuthError(error.message)
        })
    }

    const loginUser = ( user ) =>{
        signInWithEmailAndPassword( auth, user.email, user.password )
        .then( result => {
            setUser(result.user)
            const destination = user.location.state.from || '/'
            user.navigator(destination)
        })
        .catch( error =>{
            setAuthError( error.message )
        })
    }
    
    const logOut = () =>{
        signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
            setAuthError( error.message )
          });
    }

    return {
        user,
        authError,
        googleSignIn,
        registerUser,
        loginUser,
        logOut,
        isLoading
    }
}

export default useFirebase;