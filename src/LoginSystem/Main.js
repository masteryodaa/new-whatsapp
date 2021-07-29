import React from 'react'
import LoginHead from './LoginHead'
import Signin from './Signin'
import { auth, provider } from '../config'

function Login() {

    const signIn = ()=>{
    auth.signInWithPopup(provider)
        .then((result)=>console.log(result))
        .catch((error)=>alert(error.message));

}
    
    return (
        <div>
            <LoginHead />
            <Signin signIn={signIn}/>
        </div>
    )
}

export default Login
