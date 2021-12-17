import { useEffect, useState } from "react"
import initializeAppFirebase from "../page/Login/Login/FirebaseManager/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken, signInWithPopup, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider } from "firebase/auth";




initializeAppFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAutError] = useState('')
    const auth = getAuth();
    const [admin, setAdmin] = useState({});
    const [token, setToken] = useState('')

    const googleSingInProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)

                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {

                });
                navigate("/")
                setAutError("")

            })
            .catch((error) => {
                setAutError(error.message)
            })
            .finally(() => setIsLoading(false))


    }

    // on Auth State Changed  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })

            } else {
                // User is signed out
                // ...
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unsubscribe
    }, [])

    // admin role 

    useEffect(() => {

        fetch(`https://mighty-basin-45037.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])





    // google sing in


    const googleSingIn = (navigate, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleSingInProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, "PUT")
                setAutError("")
                const from = location.state?.from || "/";
                navigate(from);
            }).catch((error) => {
                setAutError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    // login user
    const loginUser = (email, password, navigate, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const from = location.state?.from || "/";
                navigate(from);
                setAutError('');

            })
            .catch((error) => {
                setAutError(error.message);
            })

            .finally(() => setIsLoading(false));
    }



    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    // seve user 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://mighty-basin-45037.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => console.log(res))

    }
    return {
        user,
        registerUser,
        loginUser,
        logout,
        admin,
        isLoading,
        authError,
        googleSingIn,
        token

    }
}


export default useFirebase
