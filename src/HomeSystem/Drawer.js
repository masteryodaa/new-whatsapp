import React from 'react'
import Sidebar from './Sidebar'
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


function Drawer() {
  return (
    <div class='side_drawer'>
      <IconButton>
        <button class="btn rounded ofc_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><QuestionAnswerIcon fontSize='large'/></button>
      </IconButton>

     

      <div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

        <div class="offcanvas-body m-0 p-0">


          <div class='off_homepage_sidebar container p-0'>
            <Sidebar />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Drawer
