import { Box, Divider, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

export const MuiLayout = () => {
    return (
        <Paper sx={{padding:'100px', margin:'100px'}} elevation={5}>
            <Stack sx={{border: 1}} direction={"row"} spacing={2} divider={<Divider orientation='vertical' flexItem />}>
                <Box component="div" sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "100px",
                    width: "100px",
                    fontSize: "20px",
                    padding: "100px",
                    '&:hover': {
                        backgroundColor: "primary.light"
                    }
                }}>
                    Hello World
                </Box>

                <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={3} border={1}>
                    Hello World
                </Box>
            </Stack>
            {/* ----- */}
            <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                    <Box bgcolor='primary.main' p={3} >
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box bgcolor='primary.main' p={3} >
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box bgcolor='primary.main' p={3} >
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box bgcolor='primary.main' p={3} >
                        Item 4
                    </Box>
                </Grid>
            </Grid>

        </Paper>
    )
}
// why not div, box contain props like sx which contain mui theme access
// 1. Box     --> component="span" sx={{}}
// 2. Stack   --> direction, spacing, divider
// 3. Divider --> orientation, flexItem
// 4. Grid    --> container, item, spacing, rowSpacing(container), columnSpacing(container) 
// 5. Paper   --> elevation (use for create a card effect to container)

// Grid notes 
// 1. The Grid comp uses the flexbox module
// 2. The Grid consists of 12 columns
// 3. Each item in the grid can take up one or more columns as its width
// 4. five breakpoints --> xs, sm, md, lg, and xl
// 5. we can assign integer value to each breakpoint