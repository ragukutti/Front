import { Box, Table, TableCell, TableRow,TableHead, TableBody} from '@mui/material'
import {React,useEffect,useState}from 'react'
import axios from 'axios'


const Read = () => {
     const [apidata,setApidata] = useState([])
     const Getdata = async()=>{
        const sar= await axios.get('https://639749ae86d04c76339104fb.mockapi.io/Login')
       setApidata(sar.data)
      console.log(apidata)
    useEffect(()=>{
       Getdata()
    },[])
     }
  return (
      <Box justifyContent="center"  alignItems="center" display="flex" width="400px">
       <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Firstname</TableCell>
                    <TableCell>Lastname</TableCell>
                    <TableCell>Cheked</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
            </TableBody>
          </Table>
   </Box>
  )
}

export default Read
