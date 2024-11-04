import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Exemplo1 from  './routes/Paginas/Exemplo1.jsx'
import Exemplo2 from  './routes/Paginas/Exemplo2.jsx'


const router = createBrowserRouter([{

  path:'/',element:<App/>,
  errorElement:<Error/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/exemplo1',element:<Exemplo1/>},
    {path:'/exemplo2',element:<Exemplo2/>},

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
