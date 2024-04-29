import { Stack, Button, Typography, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
export const MuiButton = () => {
    const [formats, setFormats] = useState([]);
    const handleFormatChange = (e,updatedFormat)=>{
        console.log(e,updatedFormat)
        setFormats(updatedFormat)
    }

    return (
        <>
            <Typography variant='h4'>Buttons:</Typography>
            <Stack spacing={4}>
                <Stack spacing={2} direction={'row'}>
                    <Button href='https://google.com' target='_blank'>Text</Button>
                    <Button variant='contained' href='https://google.com'>Contained</Button>
                    <Button variant='outlined'>Outlined</Button>
                </Stack>

                <Stack spacing={2} direction={'row'}>
                    <Button variant='contained' color='primary'>Primary</Button>
                    <Button variant='contained' color='secondary'>Secondary</Button>
                    <Button variant='contained' color='success'>Success</Button>
                    <Button variant='contained' color='warning'>warning</Button>
                    <Button variant='contained' color='info'>Info</Button>
                    <Button variant='contained' color='error'>Error</Button>
                    <Button variant='contained' color='grey'>Grey</Button>
                    <Button variant='contained' color='text'>Grey</Button>
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <Button variant='outlined' color='primary'>Primary</Button>
                    <Button variant='outlined' color='secondary'>Secondary</Button>
                    <Button variant='outlined' color='success'>Success</Button>
                </Stack>
                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='contained' size="small" color='primary'>Small</Button>
                    <Button variant='contained' size="medium" color='secondary'>Medium</Button>
                    <Button variant='contained' size="large" color='success'>Large</Button>
                </Stack>

                <Stack spacing={2} direction={'row'}>
                    <Button variant='contained' startIcon={<SendIcon />} disableElevation
                        onClick={() => alert("Hello World")}
                    >Send</Button>
                    <Button variant='contained' endIcon={<SendIcon />} disableTouchRipple>Send</Button>
                    <IconButton aria-label='send' size="smalls">
                        <SendIcon color='success' />
                    </IconButton>
                </Stack>
                <Stack direction={'row'}>
                    <ButtonGroup variant='text' size="large" orientation='vertical' aria-label='alignment button group'>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
                {/* toggle Button group */}
                <Stack direction={'row'}>
                    <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} orientation='vertical' exclusive>
                        <ToggleButton value="bold" aria-label='bold'>
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label='italic'>
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label='underlined'>
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}

// 1. variant --> three variants of buttons (button with href convert into anchor tag)
// 2. Button --> (variant, size, color, startIcon, endIcon, onclick)
// 3. Stack --> like div with default flexbox properties (default: column) (display, gap, direction)
// 4. IconButton -->  wrap icon init
// 5. ButtonGroup --> wrap Button init and add button props directly. additional props (orientaion='vertical')
// 6. ToggleButtonGroup --> value, onChange (give event and selected valuee [array] ), the exclusive tag mean one at a time