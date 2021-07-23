import React, { Component } from 'react'
import image from '../asset/logo.gif'

class Logo extends Component {
    render() {
        return (

            <div class='d-flex justify-content-center'>
                <img alt='' src={image} style={{ width: 100, height: 100 }}></img>
            </div>

        )
    }
}

export default Logo
