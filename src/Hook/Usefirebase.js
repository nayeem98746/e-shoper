import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () =>{
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const [ user, setUser ] = useState(null)
    const [ modal, setModal ] = useState(false)
    const [ authError, setAuthError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);

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
        signInWithPopup(auth,provider)
        .then( result =>{
            setUser(result.user)
            console.log(location.state.from);
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

                setModal(true)
                
              }).catch((error) => {
                setAuthError(error.message)
              });
        })
        .catch( error =>{
            setAuthError(error.message)
        })
    }

    const loginUser = ({email,password,location,navigator} ) =>{
        signInWithEmailAndPassword( auth, email, password )
        .then( result => {
            setUser(result.user)
            // const destination = location.state.from || '/';
            // navigator(destination)
            setModal(true)
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
        isLoading,
        setModal,
        modal
    }
}

export default useFirebase;