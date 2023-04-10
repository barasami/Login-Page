import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Card } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Login() {
  return (
    <Card className='card'>
        <div className='log_person'>
            <div className='person'>
                <PersonIcon />
            </div>
        </div>
        <div className='username'>
            <TextField
            label="Username"
            id="outlined-size-small"
            size="small"
            />
        </div>
        <div className='password'>
            <TextField
            label="Password"
            id="outlined-size-small"
            size="small"
            type='password'
            />
        </div>
       <div className='btn'>
            <div>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary">
                    Sign Up
                </Button>
            </div>
       </div>
       <div className='f_password'>
         <p>Forgot Password</p>
       </div>
       <div className='option_two'>
            <div className='title'>
                <h5>OR</h5>
            </div>
            <div className='icon'>
                <div>
                    <InstagramIcon color='primary'/>
                </div>
                <div>
                    <FacebookIcon/>
                </div>
                <div>
                    <TwitterIcon/>
                </div>
                
            </div>
       </div>
        
    </Card>
  )
}

export default Login