import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Login() {
  return (
    <Paper className='card' elevation={2} >
        <div className='log_person'>
            <div className='person'>
                <PersonIcon fontSize='large' />
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
                <Button variant="outlined" color="primary">
                    Login
                </Button>
            </div>
            <div>
                <Button variant="outlined" color="primary">
                    Sign Up
                </Button>
            </div>
       </div>
       <div className='f_password'>
            <a className='link' href='#'>Forgot Password?</a>  
       </div>
       <div className='option_two'>
            <div className='title'>
                <h5 className='alternative'>OR</h5>
            </div>
            <div className='icon'>
                <div className='instalink'>
                    <InstagramIcon color='primary'/>
                </div>
                <div className='facebooklink'>
                    <FacebookIcon color='primary'/>
                </div>
                <div className='twitterlink'>
                    <TwitterIcon color='primary'/>
                </div>
                
            </div>
       </div>
        
    </Paper>
  )
}

export default Login