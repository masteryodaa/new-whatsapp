import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Button from './Button'
import Logo from './Logo'

class Signin extends Component {
    render() {
        return (

            <div class='container mt-5'>
                <div class='row d-flex justify-content-center'>
                    <div class='col-11 col-md-6'>
                        <div class='card shadow-lg'>
                            <div class='card-body py-5'>
                                
                                <Logo/>
                                
                                <h1 class="display-4 my-3 text-center font1">Welcome to<br></br> newWhatsapp</h1>
                                
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

        )
    }
}

export default Signin