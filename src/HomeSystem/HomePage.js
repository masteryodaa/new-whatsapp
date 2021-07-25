import React from 'react'
import Sidebar from './Sidebar'
import Chatpanel from './ChatPanel'

function HomePage() {
    return (
        <div class='homepage'>
            <div class='homepage_body'>

                <div class='homepage_sidebar'>
                    <Sidebar />
                </div>

                <div class='homepage_chatpanel'>
                    {/* <Chatpanel/> */}
                </div>

            </div>
        </div>
    )
}

export default HomePage
