import React, {useState, useEffect} from 'react'
import {Avatar} from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {db} from '../config'


function SidebarChat({addnewChat, name}) {

    const[dp, setDP]=useState('');
    
    useEffect(()=>
        setDP(Math.floor(Math.random()*1000))
    ,[])

    const createchat = ()=>{
        const chatroom = prompt("Enter your Chatroom name")

        if(chatroom){
            db.collection('rooms').add({
            name: chatroom
            })
        }
    }

    return !addnewChat ? (
        <div class='sidebarchat_item d-flex align-items-center'>

            <Avatar class='avatarImg' alt='' src={`https://avatars.dicebear.com/api/human/${dp}.svg?r=50`}/>

            <div class='chatInfo py-3'>
                <h6 class='m-0 p-0'>{name}</h6>
                <p class='m-0 p-0'>This is a message.</p>
            </div>
        </div>
    ) : (
        <div class='newChat' onClick={createchat}>
                <ChatBubbleIcon/>
               <h3> Add a new chat</h3>
            </div>
    )
}

export default SidebarChat
