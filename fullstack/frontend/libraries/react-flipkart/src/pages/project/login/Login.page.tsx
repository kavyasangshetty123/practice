import { Box, Button, Grid, Paper, TextField, Toolbar } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login:React.FC<{}>=()=>{
   let [emailVal,setEmailVal]= useState('')
   let [passwordVal,setPasswordVal]= useState('')
   let navigate=useNavigate()
    return <>
    <Box style={{ height: '100vh'}}>
        <Paper>

        
        <Toolbar/>
        <Grid container spacing={2}>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
                <Paper elevation={3}>
                <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
            <h1>Login Form</h1>
            <TextField value={emailVal}
            id="outlined-basic"
             label="email" 
             variant="outlined"
             onChange={(e)=>{
                setEmailVal(e.target.value)
                console.log(e.target.value)}}
              />
            <br />
            <TextField
            value={passwordVal}
             id="outlined-basic"
              label="password" 
              variant="outlined"
              onChange={(e)=>{setPasswordVal(e.target.value)}}
               type="password"/>
            <br />
            <Button 
            onClick={()=>{
                alert(`${emailVal}---${passwordVal}`)
                navigate('/project/home')
            }}
            variant="contained"
             color='info'>login</Button>
             <Link to='/project/register'>
             <Button>Register</Button>
             </Link>
        </Grid>
                </Paper>
            </Grid>
            <Grid xs={2}></Grid>
        </Grid>
       
        <Toolbar/>
        </Paper>
    </Box>
    
    </>
}