import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
export const MuiTextField = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const togglePassword = () => setShowPassword(!showPassword)
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction={'row'}>
                    <TextField label="Name" variant='filled' color='secondary' />
                    <TextField label="Name" variant='standard' required />
                    <TextField label="Name" variant='outlined' size="small" />
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <TextField label="Password" type='password' variant='standard' helperText="Do not share your password with anyone" />
                    <TextField label="Read only" type='text' variant='outlined' value={"Ashar"} InputProps={{ readOnly: true }} />
                </Stack>
                {/* InputAdornment */}
                <Stack spacing={2} direction={'row'} >
                    <TextField
                        label='Amount'
                        InputProps={{
                            startAdornment: <InputAdornment position='start'>$</InputAdornment>
                        }}
                    />
                    <TextField
                        label='Weight'
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                        }}
                    />
                </Stack>
                {/* passoword with icons */}
                <Stack spacing={2} direction={'row'}>
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: <InputAdornment sx={{ cursor: 'pointer' }} position='end'> {showPassword ? <VisibilityIcon onClick={togglePassword} /> : <VisibilityOffIcon onClick={togglePassword} />} </InputAdornment>
                        }}
                        value={password}
                        error={!password}
                        onChange={(e)=> setPassword(e.target.value)}
                        helperText={!password? "Password Required": "Do not share your password"}
                    />
                </Stack>
            </Stack>
        </>
    )
}

// 1. TextField --> label, type, value, variant, helperText, InputProps={{readOnly:true}}, error
// 2. InputAdornment --> position, (used in InputProps for prefix or suffix the icon or unit in input field) 