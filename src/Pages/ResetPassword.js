import React from 'react'
import {Box,Paper,Stack,Typography,Button} from '@mui/material'
const ResetPassword = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Stack direction='column' spacing={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Typography variant='h4' sx={{fontFamily:'Poppins'}}>Reset Your Password</Typography>
        <Paper elevation={5}>
            <Stack direction='column' spacing={3} sx={{padding:'30px'}}>
                <Typography textAlign='left' sx={{fontFamily:'Poppins'}}>
                Check your email for a link to reset your<br/> password. If it doesn’t appear within a few <br/>minutes, check your spam folder.
                </Typography>
                <Button href='/Login' variant='contained' sx={{fontFamily:'Poppins'}}>Return to Sign in</Button>
            </Stack>
        </Paper>
        </Stack>
    </Box>
  )
}

export default ResetPassword

