import {React} from 'react'
import {Box,Button,FormControl,TextField, Typography } from '@mui/material'

const Profile = () => {

  return (
          <Box
          sx={{ margin:"auto",marginTop:"100px",
          alignItems:"center",
          display:"flex",
          width:"400px",
          height:"400px",
          justifyContent:"center",
          textAlign:"center",
          boxShadow:"5px 5px 10px white",
          borderRadius:"5px"}}>
         <FormControl>
          <Typography margin="10px" variant='h4' color="#030503"> login</Typography>
          <TextField sx={{margin:"3px"}} 
             id="standard-basic" 
             label="Name" 
             variant="standard"  
             color="info">

          </TextField>

          <TextField sx={{margin:"3px"}} 
            id="standard-basic" 
            label="Email" variant="standard" 
            color="info"
            Type="Email">
          
          </TextField>

          <TextField sx={{margin:"3px"}}
             id="standard-basic" 
             label="password" 
             variant="standard"  
             color="info">
          
         </TextField>

          <Button sx={{margin:"20px"}} color="warning" variant="contained" >login</Button>
         </FormControl>
        </Box>
    )

}

export default Profile