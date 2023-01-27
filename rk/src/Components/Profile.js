import React from 'react'
import {Box,Stack, FormControl,TextField } from '@mui/material'

const Profile = () => {
  return (
          <Box
          sx={{ margin:"auto",marginTop:"100px",
          alignItems:"center",
          display:"flex"
          ,justifyContent:"center",
          textAlign:"center",borderShadow:"5px 5px 10px white"}}>
         <FormControl>
          <TextField  id="standard-basic" label="Firstname" varient="standard"  color="info"></TextField>
          <TextField varient="contained" placeholder='Firstname'></TextField>
          <TextField varient="standard" placeholder='Firstname'></TextField>
         </FormControl>
        </Box>
    )

}

export default Profile