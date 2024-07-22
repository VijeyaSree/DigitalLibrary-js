import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainComp from './MainComp/MainComp'
import FullstackBooks from './Explore/FullstackBooks'
import SignInSide from './SignInSide/SignInSide'
import ForgotPassword from './ForgetPassword/ForgotPassword'
import Register from './Register/Register'
import Feedback from './Feedback/Feedback'
import Download from './Download/Download'
import Aboutus from './About/Aboutus'
import Profile from './Profile/Profile'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComp/>}></Route>
        <Route path='/Explore' element={<FullstackBooks/>}></Route>
        <Route path='/Explore the feature' element={<SignInSide/>}></Route>
        <Route path='/Explore' element={<FullstackBooks/>}></Route>
        <Route path='/forgot' element={<ForgotPassword/>}></Route>
        <Route path='about' element={<Aboutus/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<SignInSide/>}></Route>
        <Route path='/Download' element={<Download/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/Home' element={<MainComp/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App