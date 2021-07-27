import React from 'react'
import Sidebar from './Sidebar'
import Chatpanel from './ChatPanel'

function HomePage() {
    return (
        <div class='homepage m-0 p-0'>
            <div class='homepage_body'>

                <div class='homepage_sidebar container p-0'>
                    <Sidebar />
                </div>

                <div class='homepage_chatpanel'>
                    <Chatpanel/>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage
