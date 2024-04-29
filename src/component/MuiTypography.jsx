import React from 'react'
import { Typography } from '@mui/material'
export const MuiTypography = () => {
  return (
    <>
      <Typography variant='h4'>Typography:</Typography>
      <Typography variant='h1'>hello</Typography>
      <Typography variant='h2'>hello</Typography>
      <Typography variant='h3'>hello</Typography>
      <Typography variant='h4'>hello</Typography>
      <Typography variant='h5' gutterBottom>hello</Typography>
                                {/* // use h1 tag  */}
      <Typography variant='h6' component="h1" gutterBottom>hello</Typography>

      <Typography variant='subtitle1'>subtitle1 (h6)</Typography>   
      <Typography variant='subtitle2'>subtitle2 (h6)</Typography>   

      <Typography>this is simple typography with out props (p)</Typography>

      <Typography variant='body1'>body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique voluptatem illo expedita, aut veniam iure ab quaerat eius mollitia, autem eum?</Typography>
      <Typography variant='body2'>body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis consectetur, quod sed sint earum, voluptates eaque quaerat, nobis cupiditate perspiciatis reiciendis.</Typography>
    </>
  )
}
// variant --> style like elements
// component --> tags use
// gutterBottom --> give bottom padding (0.35em), default false 