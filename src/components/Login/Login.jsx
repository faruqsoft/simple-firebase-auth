import React, {useState} from 'react';
import { GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";

import {auth} from "../../Firebase/Firebase.init.js";


const Login = () => {
    const [user, setUser] = useState(null);


    
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google signIn');

        signInWithPopup(auth,provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            })


    }

    const handleGoogleSignOut=()=>{
       signOut(auth).then(() => {
            console.log('Google signOut');
            setUser(null);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div>
            <h1>Please login</h1>
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
            <button onClick={handleGoogleSignOut}>Sign Out</button>

            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;