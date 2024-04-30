import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
export const MuiCheckbox = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [skills, setSkills] = useState([]);
    const handleChange = (e) => {
        setAcceptTerms(e.target.checked)
        console.log(acceptTerms)
    }
    const handleChangeSkill = (e)=>{
        const index = skills.indexOf(e.target.value);
        if(index == -1){
            setSkills([...skills,e.target.value])
        }else{
            setSkills(skills.filter(skill=>skill!= e.target.value))
        }
        console.log(skills)
    }
    return (
        <>
            {/* single check with state */}
            <Box pt={4}>
                <FormControlLabel control={<Checkbox checked={acceptTerms} onChange={handleChange} />} label="Accept Terms & Condition" />
            </Box>
            {/* with custom icon */}
            <Box pt={4}>
                <FormControlLabel control={<Checkbox checked={acceptTerms} onChange={handleChange} icon={<BookmarkIcon />} checkedIcon={<BookmarkBorderIcon />} />} label="Bookmark" />
            </Box>
            {/* checkbox group --> real world example like quiz app select multiple choice question*/}
            <FormControl>
                <FormLabel>Your Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label="HTML" value="HTML" control={<Checkbox checked={skills.includes("HTML")} onChange={handleChangeSkill} />} />
                    <FormControlLabel label="CSS" value="CSS" control={<Checkbox checked={skills.includes("CSS")} onChange={handleChangeSkill} />} />
                    <FormControlLabel label="JS" value="JS" control={<Checkbox checked={skills.includes("JS")} onChange={handleChangeSkill} />} />
                </FormGroup>
            </FormControl>

            {/* Switch */}
            <Box>
                <FormControlLabel  label="Dark Mode" control={<Switch />} checked={acceptTerms} onChange={handleChange} />
            </Box>
        </>
    )
}

// 1. Checkbox --> checked, onChange, icon, checkedIcon
// 2. Switch