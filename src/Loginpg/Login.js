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
    <Paper className='card' elevation={1}>
        <div className='log_person'>
            <div className='person'>
                <PersonIcon fontSize='large' color='primary' />
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
        <div className='remember_me'>
            <div className='remember'>
                <input type="checkbox"/>
                <p className='text'>Remember Me</p>
            </div>
       </div>
       <div className='btn'>
            <div className='login'>
                <Button variant="contained" color="primary" className='login'>
                    Login
                </Button>
            </div>
       </div>
       <div className='f_password'>
            <a className='link' href='/'>Forgot Password?</a>  
       </div>
       <div className='option_two'>
            <div className='title'>
                <h5 className='alternative'>Sign Up</h5>
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