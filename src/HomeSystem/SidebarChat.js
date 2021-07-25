import React from 'react'
import {Avatar as img} from '@material-ui/core';

function SidebarChat() {
    return (
        <div class='sidebarchat_item d-flex align-items-center'>

            
            <img class='avatarImg' alt='' src='https://avatars.dicebear.com/api/initials/yoda.svg?r=50'/>

            <div class='chatInfo py-3'>
                <h6 class='m-0 p-0'>Yoda</h6>
                <p class='m-0 p-0'>This is a message.</p>
            </div>
        </div>
    )
}

export default SidebarChat
