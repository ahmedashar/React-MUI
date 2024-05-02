import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import { KeyboardArrowDown } from '@mui/icons-material';
export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit'>
                    <FlightIcon />
                </IconButton>
                <Typography flexGrow={1} >
                    FlightBooking
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button
                        color='inherit'
                        id='resources-menu'
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu': undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDown />}
                    >Resources</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Logic</Button>
                </Stack>
                <Menu 
                id='resources-menu' 
                anchorEl={anchorEl} 
                open={open} 
                MenuListProps={{
                    'aria-labelledby': 'resources-bottom'
                }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                >
                    <MenuItem>Resource 1</MenuItem>
                    <MenuItem>Resource 2</MenuItem>
                    <MenuItem>Resource 3</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

// 1. AppBar --> position static
// 2. Toolbar  
// 3. IconButton
// 4. Stack for navlinks
// 5. Menu
// 6. MenuItem 

// https://mui.com/material-ui/react-popover/  for handle positions