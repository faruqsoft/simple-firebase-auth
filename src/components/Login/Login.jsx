import React from 'react';

const Login = () => {

    const handleGoogleSignIn = () => {
        console.log('Google signIn');
    }
    return (
        <div>
            <h1>Please login</h1>
            <button onClick={()=>handleGoogleSignIn()}>Sign in with google</button>
        </div>
    );
};

export default Login;