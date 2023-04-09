import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <div>
        <div>
            <TextField
            label="Username"
            id="outlined-size-small"
            size="small"
            />
        </div>
        <div>
            <TextField
            label="Password"
            id="outlined-size-small"
            size="small"
            type='password'
            />
        </div>
       <div>
            <Button variant="contained" color="primary">
                Login
            </Button>
       </div>
        
    </div>
  )
}

export default Login