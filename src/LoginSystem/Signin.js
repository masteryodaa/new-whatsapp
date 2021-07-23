import React, { Component } from 'react'
import Button from './Button'
import Logo from './Logo'

class Signin extends Component {
    render() {
        return (
            <div class='container'>
                <div class='row'>
                    <div class='col-6 offset-3'>
                        <div class='card '>
                            <div class='card-body py-5'>
                                
                                <Logo/>

                                <h1 class="display-4 my-3 text-center font1">Welcome to<br></br> newWhatsapp</h1>
                                
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin