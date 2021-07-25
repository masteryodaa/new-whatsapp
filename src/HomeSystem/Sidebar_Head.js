import React from 'react'
import FaceIcon from '@material-ui/icons/Face';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';


function Sidebar_Head() {
    return (
        <div class='sidebar_head'>
            <IconButton>
                <FaceIcon fontSize='large' />

            </IconButton>

            <div class='head_icon'>
                <IconButton>
                    <DonutLargeIcon  />

                </IconButton>

                <IconButton>
                    <ChatIcon fontSize='medium' style={{ marginLeft: 2, marginRight: 2 }} />

                </IconButton>

                <IconButton>
                    <MoreVertIcon fontSize='medium' />

                </IconButton>

            </div>

        </div>
    )
}

export default Sidebar_Head
