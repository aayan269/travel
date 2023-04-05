import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Private from '../component/Private'
import { SignIn } from './Signin'
import { Register } from './Signup'
import Home from './Home'
import Travelbook from './Travelbook'

export default function AllPages() {
  
  return (
    <Routes>
<Route   path="/" element={<Private><Home/></Private>}  />
<Route   path="/table" element={<Private><Travelbook/></Private>}  />
<Route   path="/login" element={<SignIn/>}  />
<Route path="/signup" element={<Register/>} />

    </Routes>
  )
}
