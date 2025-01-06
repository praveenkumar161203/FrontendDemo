import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import User  from './User'
import  Createuser  from './Createuser'
import  Updateuser  from './Updateuser'
function Apps() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/create' element={<Createuser/>}/>
            <Route path='/update' element={<Updateuser/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Apps
