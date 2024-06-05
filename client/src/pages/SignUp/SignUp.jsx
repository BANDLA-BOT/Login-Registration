import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Login/Login.css'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  
  const SignUpSubmitHandler =async(e)=>{
      e.preventDefault();
      const user = {
        username:username,
        email:email,
        password:password,
        
      }
       await axios.post('http://localhost:8000/signup',user);
       setEmail('');
       setPassword('')
       setUsername('')
  }
  return (
    <div className="login">
      <div className="login__card">
        <div className="title">
          <h1>
            track<span>EX</span>
          </h1>
          {/* <p>A virtual Accountant at your service</p> */}
        </div>
        <form onSubmit={SignUpSubmitHandler} className="login__form">
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
           <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account ?{" "}
            <Link to="/" className="login__form--signup-btn">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
