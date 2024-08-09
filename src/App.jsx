import './App.css'
import FetchingAllData from './Components/FetchingAllData';
import Header from './Components/Header'
import { Outlet } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
    <>
     <FetchingAllData />
     <Header/>
     <Outlet/>

    </>
  )
}

export default App
