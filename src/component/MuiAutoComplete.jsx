import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiAutoComplete = () => {
  const skills = ["HTML","CSS","JavaScript","TypeScript","Hello World"]
  const [value, setValue] = useState("");
  const [skill, setSkills] = useState({});
  const skillsOptions = skills.map((item,key)=> ({id:key+1 , label: item}))
  return (
    <>
        <Stack spacing={2} width="250px">
          <Autocomplete 
          options={skills} 
          renderInput={(params)=> <TextField {...params} label="Skills" />} 
          value={value}
          onChange={(e,newValue)=>{
            setValue(newValue);
            console.log(e,newValue);
          }}
          freeSolo  //accept values which not available on array of strings
          />
          {/* for an object */}

          <Autocomplete 
          options={skillsOptions} 
          renderInput={(params)=> <TextField {...params} label="Skills" />} 
          value={value}
          onChange={(e,newValue)=>{
            setSkills(newValue);
            console.log(e,newValue);
          }}
          freeSolo  //accept values which not available on array of strings
          />
        </Stack>
    </>
  )
}
// 1. AutoComplete --> options (array of strings), renderInput, value, onChange={(e,newValue)=>}