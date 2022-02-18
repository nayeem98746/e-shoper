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
    const [ isLoading, setIsLoading ] = useState(true)
    const [admin, setAdmin] = useState(false)

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

    const googleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then( result =>{
            setUser(result.user)
            userDatabase(result.user.email, result.user.displayName, 'PUT')
            setModal(true)
        })
        .catch( error =>{
            setAuthError(error.message)
        })
    }
    const registerUser = ( user ) =>{
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then( result => {
            setUser(result.user)
            userDatabase(user.email , user.name , 'POST')
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

    useEffect(() => {
        fetch(`https://powerful-oasis-75511.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

        .catch(error => {
            console.log('admin error')
        })
      }, [user?.email])

    const loginUser = ({email,password} ) =>{
        signInWithEmailAndPassword( auth, email, password )
        .then( result => {
            setUser(result.user)
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

    const userDatabase = (email, displayName , method) => {
        const user = {email, displayName, admin:false}
        fetch('https://powerful-oasis-75511.herokuapp.com/users', {
          method: method,
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(user)
        })
        .then( res=>res.json())
        .then( data=> console.log(data))
  
      }

    return {
        user,
        authError,
        admin,
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