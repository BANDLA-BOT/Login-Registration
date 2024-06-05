import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom'


const login = () => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ profile, setProfile] = useState([]);

  const loginSubmitHandler =async (e)=>{
      e.preventDefault();
      const loginCredentials = {
        email:email,
        password:password
      }
      const response = await axios.post('http://localhost:8000/login',loginCredentials)
      console.log(response.data.success)
      if(response.data.success){
        console.log(response.data)
        LoginSuccessfull()
        // navigate('/')
      }
      else{
        loginFailed()
      }
      setEmail('');
      setPassword('');

  }
  const LoginSuccessfull = ()=> toast("Logged in successfully")
  const loginFailed = ()=> toast("Login failed ! Invalid credentials")


  return (
    <div className='login'>
      <div className="login__card">
      <div className="title">
        <h1>
        track<span>EX</span>
        </h1>
      </div>
      <form onSubmit={loginSubmitHandler} className='login__form'>
        <input type="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password"  value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit'>Login</button>
        <p>Dont have an account yet? <Link to='/signup' className='login__form--signup-btn'>Sign up</Link></p>
      </form>
        <ToastContainer/>
      </div>
    </div>
    
  )
}

export default login