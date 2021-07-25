import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Sidebar_search() {
    return (
        <div class='sidebar_search'>
            <div class='search_container rounded-pill px-3 d-flex align-items-center'>
                <SearchIcon/>

                <input placeholder='Search' type='text' class='search_input w-100 py-1 ms-2' />
            </div>
        </div>
    )
}

export default Sidebar_search
