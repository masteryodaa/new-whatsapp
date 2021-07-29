import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendIcon from '@material-ui/icons/Send';
import Drawer from './Drawer';


function ChatPanel() {

    const [value, setValue] = useState("")


    const sendchat = (e)=>{
        e.preventDefault();
        console.log(value);
        setValue('');
    }

    // const setValue = ()=>{

    // }

    return (
        <div class='chatpanel'>

            <div class='sidebar_head chat_head_container'>
                <div class='chatpanel_head'>
                    <Avatar class='avatarImg' alt='' src='https://avatars.dicebear.com/api/initials/yoda.svg?r=50' />
                    <div class='chatpanel_head_info'>
                        <h5>Yoda</h5>
                        <p>Active Now</p>
                    </div>
                </div>

                <Drawer />
            </div>

            <div class='chatpanel_body'>

                <div class='chatslist '>
                    <div class='sender_name'>yoda</div>
                    <div class='text_item'>{value}</div>
                </div>
            </div>

            <div class='chatpanel_footer '>

                <form class='footer_container bg-white rounded-pill px-2 d-flex align-items-center'>
                    <div class='btn' id="emoji-trigger"><EmojiEmotionsOutlinedIcon style={{ fontSize: 35 }} /></div>

                    <input class='search_input py-1 my-2 mx-3' value={value} onChange={e=>setValue(e.target.value)} placeholder='Type a message'></input>

                    <button class='btn send_btn' type='submit' onClick={sendchat}> <SendIcon style={{ fontSize: 35 }} /></button>

                </form>

            </div>

        </div>
    )
}

export default ChatPanel
