import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

export const MuiLink = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href='#' underline='hover'>Link</Link>
            <Link href='#' variant='h6' color='secondary' underline='none'>Secondary</Link>

            <Typography variant='h4'>
                <Link href='#' color='secondary' underline='hover'>Secondary</Link>
            </Typography>
        </Stack>
    )
}

// 1. Link href, variant, color, underline="hover or none"
