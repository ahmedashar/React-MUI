
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export const MuiRadio = () => {
    const [gender, setGender] = useState("");
    console.log(gender)
  return (
    <>
        <Box pt={4}>
            <FormControl>
                <FormLabel>
                    Gender
                </FormLabel>
                <RadioGroup value={gender} onChange={(e)=>setGender(e.target.value)} row>    
                    <FormControlLabel control={<Radio />} label="Male" value="Male"/>
                    <FormControlLabel control={<Radio />} label="Female" value="Female"/>
                    <FormControlLabel control={<Radio />} label="Other" value="Other"/>
                </RadioGroup>
            </FormControl>
        </Box>
    </>
  )
}

// 1. FormControl --> 
// 2. FormLabel 
// 3. RadioGroup--> value, onchange, row
// 4. FormControlLabel --> control={<Radio />}, label, value
