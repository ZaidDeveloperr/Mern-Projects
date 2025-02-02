import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL // import.meta is a JavaScript object that contains metadata about the module we're currently in.
// import.meta.env holds the values of variables you define in your project’s environment configuration

export const currency = '₹'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'') // It tries to get a value from the browser's localStorage using the key 'token'

  useEffect(() => {
    localStorage.setItem('token',token) // It saves the token to localStorage whenever the value of token changes
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === ''
        ? <Login setToken={setToken}/>
        :
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] max-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} /> {/* route component receives the token as a prop */}
                <Route path='/list' element={<List token={token} />} /> {/* route component receives the token as a prop */}
                <Route path='/orders' element={<Orders token={token} />} /> {/* route component receives the token as a prop */}
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App