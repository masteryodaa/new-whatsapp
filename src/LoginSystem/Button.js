import React from 'react'


function Button(props) {
    return (
        <div>
            <button onClick={props.signIn} class='my-3 btn w-100 mt-2 btn-lg btn-outline-success rounded-pill'>Sign in with Google</button>
        </div>
    )
}

export default Button

