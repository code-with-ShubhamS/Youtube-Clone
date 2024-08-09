import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store/index.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './Components/Search.jsx'
import Home from './Components/Home.jsx'
import VideoPlay from './Components/VideoPlay.jsx'


 const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/search/:searchElement',element:<Search/>},
      {path:'/VideoPlay/:id',element:<VideoPlay/>}
    ]
  },
 ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
