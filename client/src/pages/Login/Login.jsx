import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom'


const login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [ profile, setProfile] = useState([]);

  const loginSubmitHandler =async (e)=>{
      e.preventDefault();
      const loginCredentials = {
        email:email,
        password:password
      }
      await axios.post('http://localhost:8000/login',loginCredentials)
      .then(async (res)=>{
        // if(res.data.success === true){
          LoginSuccessfull()
          await navigate('/dashboard')
        // }
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
        loginFailed()
      })

      }
  //    
  const LoginSuccessfull = ()=> toast("Logged in successfully")
  const loginFailed = ()=> toast("Invalid credentials")


  return (
    <div className='login'>
      <div className="login__card">
      <div className="title">
        <h1>
       <span>TRACKEXPENSE</span>
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