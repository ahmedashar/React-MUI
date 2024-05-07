import React, { useState } from 'react'
import {Box, Drawer, IconButton, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export const MuiDrawar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  return (
    <>
    <IconButton size='large' onClick={()=> setIsOpenDrawer(true)}>
        <MenuIcon/>
    </IconButton>
      <Drawer anchor={'left'} open={isOpenDrawer} onClose={()=> setIsOpenDrawer(false)}>
        <Box width={'250px'} textAlign={'center'}>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
        
      </Drawer>  
    </>
  )
}
