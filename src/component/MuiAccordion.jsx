import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export const MuiAccordion = () => {
    const [expended, setExpended] = useState(false);
    const handleChange = (isExpended, panel)=>{
        setExpended(isExpended ? panel: false)
    }
    return (
        <Paper sx={{ margin: "100px" }}>
            <Accordion expanded={expended == "panel1"} onChange={(e,isExpended)=> handleChange(isExpended, "panel1")}>
                <AccordionSummary id="panel1-header" aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>Accordion 1</AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque omnis dolorum, quis dignissimos, dicta doloribus adipisci quod rem fugiat, voluptatem debitis.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended == "panel2"} onChange={(e,isExpended)=> handleChange(isExpended, "panel2")}>
                <AccordionSummary id="panel2-header" aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>Accordion 1</AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque omnis dolorum, quis dignissimos, dicta doloribus adipisci quod rem fugiat, voluptatem debitis.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended == "panel3"} onChange={(e,isExpended)=> handleChange(isExpended, "panel3")}>
                <AccordionSummary id="panel2-header" aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>Accordion 1</AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque omnis dolorum, quis dignissimos, dicta doloribus adipisci quod rem fugiat, voluptatem debitis.</Typography>
                </AccordionDetails>
            </Accordion>

            {/* open one at a time  */}

        </Paper>
    )
}

// 1. Accordion --> expended, onChange((e,isExp)=>{})
// 2. AccordionSummary --> id, aria-controls, expendIcon
// 3. AccordionDetails
