import './register.css';

function Register() {
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
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input type='password' placeholder='Confirm Password' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register