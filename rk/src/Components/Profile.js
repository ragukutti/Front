import React from 'react'
import {Box,Stack, FormControl,TextField } from '@mui/material'

const Profile = () => {
  return (
          <Box
          sx={{ height:"100vh",
          alignItems:"center",display:"flex",justifyContent:"center",textAlign:"center"}}>
        <Stack direction="column">
         <FormControl>
          <TextField  id="standard-basic" label="Firstname" varient="standard"  color="info"></TextField>
          <TextField varient="contained" placeholder='Firstname'></TextField>
          <TextField varient="standard" placeholder='Firstname'></TextField>
         </FormControl>
        </Stack>
        </Box>
    )

}

export default Profile