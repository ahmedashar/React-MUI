import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const MuiRating = () => {
    const [value, setValue] = useState(2);
    const handleChange = (e,newValue)=>{
        setValue(newValue);
        console.log(e,newValue);
    }
  return (
    <>
        <Stack spacing={2}>
            <Rating size='large' value={value} onChange={handleChange} precision={0.5}/>
            {/* change icon */}
            <Rating size='large' value={value} onChange={handleChange} precision={0.5} icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit' color='error'/>} highlightSelectedOnly/>
        </Stack>
    </>
  )
}

// 1. Rating --> value, onChange (the function give two arg (e, value)), precesion (select half star value), icon, changeIcon, highlightSelectedOnly, readOnly