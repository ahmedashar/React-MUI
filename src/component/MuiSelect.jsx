import { Box, MenuItem, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
  // const [country, setCountry] = useState("");
  const [country, setCountry] = useState([]); //for multiple select, the initial value must be an array
  const handleSelect = (e)=>{
    setCountry(e.target.value)
    console.log(e.target.value)
  }
  return (
    <>
      {/* <Stack direction='row' spacing={2}> */}
      <Box width='250px'>
        <TextField
          label="select"
          select
          value={country}
          onChange={handleSelect}
          fullWidth
          SelectProps={{
            multiple: true,
          }}

          >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Pakistan">Pakistan</MenuItem>
          <MenuItem value="Srilanka">Srilanka</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </TextField>
      </Box>
      {/* </Stack> */}
    </>
  )
}

// 1. TextField --> select, fullWidth, SelectProps
// 2. MenuItem --> value 