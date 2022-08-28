import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cars from './Cars'
import Flight from './Flight'
import Package from './Package'
import { Stay } from './stays'
import Things from './Things'


function SmallRoutes() {
  const navigate=useNavigate();
  return (
    <div>
        <Routes>
            <Route path="/stays" element={<Stay/>}/>
            <Route path="/flights" element={<Flight/>}/>
            <Route path="/cars" element={<Cars/>}/>
            <Route path="/packages" element={<Package/>}/>
            <Route path="/things" element={<Things/>   }/>

        </Routes>
    </div>
  )
}

export default SmallRoutes;