import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from '../../pages/searchPage'
import Cars from '../small/Cars'
import Flight from '../small/Flight'
import Package from '../small/Package'
import { Stay } from '../small/stays'
import Things from '../small/Things'
import Home from './Home'
import Login from './Login'


function AllRoutes() {
  return (
    <div>
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/stays" element={<Stay/>}/>
            <Route path="/flights" element={<Flight/>}/>
            <Route path="/cars" element={<Cars/>}/>
            <Route path="/packages" element={<Package/>}/>
            <Route path="/things" element={<Things/>   }/>
        </Routes>
    </div>
  )
}

export default AllRoutes