
import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'

function App() {


  return (
  <div>
    <Navigation></Navigation>
    <Outlet></Outlet>
  </div>
  )
}

export default App
