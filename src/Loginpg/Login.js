import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

function Login() {
  return (
    <Paper>
        <TextField
          label="Username"
          id="outlined-size-small"
          size="small"
        />
    </Paper>
  )
}

export default Login