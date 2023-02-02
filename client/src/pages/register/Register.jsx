import './register.css';
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const username = useRef();

    const navigate = useNavigate();
    
    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match!");
        }else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            
            try {
                await axios.post("/auth/register",user);
                navigate("/login");
            }catch(err) {
                console.log(err);
            }
        }
    };

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Ignitesocial</h3>
                <span className="loginDesc">
                    Connect with friends around the world with Ignitesocial
                </span>
            </div>

            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick} >
                    <input 
                    placeholder='Username' 
                    ref={username} 
                    className="loginInput"
                    required />
                    <input 
                    placeholder='Email' 
                    ref={email} 
                    type="email"
                    className="loginInput" 
                    required/>
                    <input 
                    placeholder='Password' 
                    ref={password} 
                    type="password"
                    className="loginInput" 
                    minLength='6'
                    required/>
                    <input 
                    type='password' 
                    ref={passwordAgain} 
                    placeholder='Confirm Password' 
                    className="loginInput" 
                    required/>
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <button className="loginRegisterButton">Login into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register