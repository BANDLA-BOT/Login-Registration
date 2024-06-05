import axios from "axios"
import { useState } from "react"

const Dashboard = () => {
    const [ profile, setProfile ] = useState()
    const userDetails = async()=>{
        
        axios.get('http://localhost:8000/getuser')
        .then((res)=>{
            console.log(res.data.username)
        })
    }
  return (
    <div>
        Dashboard
    </div>
  )
}

export default Dashboard