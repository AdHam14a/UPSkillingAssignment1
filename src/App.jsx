import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'

function App() {
  let routes = createBrowserRouter([{
      path:"/",
    element: <MasterLayout />,
    children: [
        { index: "true", element: <Home /> },
        { path:"skills",element:<Skills />  },
        { path: "about", element: <About /> },
        { path: "experience", element: <Experience /> },
        { path: "work", element: <Work /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
