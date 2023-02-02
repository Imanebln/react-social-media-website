import { useRef } from 'react';
import './login.css';
import { loginCall } from '../../api-calls';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from '@mui/material';

function Login() {

    const email = useRef();
    const password = useRef();

    // get the dispatch
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
    };

    console.log(user);

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
                <form className="loginBox" onSubmit={handleClick}>
                    <input 
                    placeholder='Email' 
                    type='email' 
                    required
                    className="loginInput" 
                    ref={email}/>

                    <input 
                    type='password' 
                    placeholder='Password' 
                    required
                    minLength='6'
                    className="loginInput" 
                    ref={password} />

                    <button className="loginButton" disabled={isFetching}>
                        {isFetching ? <CircularProgress color="inherit"/> : "Log In"}
                    </button>
                    <span className='loginForgot'>Forgot Password ?</span>
                    <button className="loginRegisterButton">
                        {isFetching ? <CircularProgress color="inherit"/> : "Create a new Account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login