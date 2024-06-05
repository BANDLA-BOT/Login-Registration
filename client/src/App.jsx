import './App.css';
import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App