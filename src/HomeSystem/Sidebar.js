import SidebarChat from './SidebarChat'
import SidebarHead from './Sidebar_Head'
import SidebarSearch from './Sidebar_search'
import React, {useState, useEffect} from 'react'
import db from '../config'
import Footer from '../Footer/Footer'

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot=>
        setRooms(
            snapshot.docs.map(doc=>
                ({
                    id:doc.id,
                    data:doc.data()
                })
                )
        )  )
        
    }, [])

    return (
        <div class='sidebar'>

            <div class='sidebar_head_container'>
                <SidebarHead />
            </div>

            <div class='sidebar_searchbox'>
                <SidebarSearch/>
            </div>

            <div class='sidebar_chats'>
                <SidebarChat addnewChat/>
                {rooms.map(room=>
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                    )}
            </div>  
            
        </div>
    )
}

export default Sidebar

