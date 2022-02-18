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

    const googleSignIn = (location,navigator) =>{
        signInWithPopup(auth,provider)
        .then( result =>{
            setUser(result.user)
            userDatabase(user.email, user.displayName, 'PUT')

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
        .then(data => setAdmin(data))

        .catch(error => {
            console.log('admin error')
        })
      }, [user?.email])

    const loginUser = ({email,password,location,navigator} ) =>{
        signInWithEmailAndPassword( auth, email, password )
        .then( result => {
            setUser(result.user)
            // userDatabase(email)
            // const destination = location.state.from || '/';
            // navigator(destination)

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

    const userDatabase = (email, displayName , method) => {
        const user = {email, displayName}
        fetch('https://powerful-oasis-75511.herokuapp.com/users', {
          method: method,
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(user)
        })
        .then()
  
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