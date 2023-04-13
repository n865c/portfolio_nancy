import React from 'react'
import Avatar from '@mui/material/Avatar';
import Nancy from '../images/WhatsApp Image 2023-04-09 at 21.26.15.jpeg';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Padding } from '@mui/icons-material';
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar_text'>
          <div className='avatar'>
      <Avatar alt="Nancy kumari" src={Nancy}
      sx={{
        justifyItems:'center',
        width:'100px',
        height:'100px'
      }}/>
      </div>
          Nancy Kumari</div>
          <div className='job_title'>
            web|Blockchain developer
          </div>
          <hr style={{
          borderColor: 'rgb(34, 33, 33)',
          height: '1px',
          marginBottom:'30px',
        }}/>
        <div className='icon_box'>
        <span>
        <Box
      sx={{
        width: 50,
        height: 50,
        backgroundColor: 'rgb(15, 14, 14)',
        boxShadow:'9px 6px 20px rgb(34, 33, 33) ',
        borderRadius:'10px',
      }}
       > 
      
       <MailOutlineIcon sx={{
      color:'rgb(192, 192, 68)',
      margin:'10px'
      // width:'',
      // height:'30px',
       }}/>
       </Box>
         </span>
        </div>
    </div>
  )
}

export default SideBar
