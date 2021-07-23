import React, { Component } from 'react'
import LoginHead from './LoginHead'
import Signin from './Signin'


class Login extends Component {
    render() {
        return (
            <div>
                <LoginHead />

                <Signin/>
                
            </div>
        )
    }
}

export default Login