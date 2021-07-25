import React, { Component } from 'react'
import LoginHead from './LoginHead'
import Signin from './Signin'


class Login extends Component {
    render() {
        return (
            <>
                <LoginHead />

                <Signin/>
                
            </>
        )
    }
}

export default Login