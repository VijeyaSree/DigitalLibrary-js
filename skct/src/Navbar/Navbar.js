import React from 'react'
import '../Navbar/Navbar.css'
import img1 from '../Image/dllogo2.png'
import {useNavigate} from 'react-router-dom'
import img2 from '../Image/logo3.png'

const Navbar = (props) => {
  console.log("props=====>>>>",props)
  const handleClick=()=>{
    alert("Already In Home");
  }
  const navigate=useNavigate();
  const handleClicks=()=>{
    navigate('/Explore')
  }
  const navigate1=useNavigate();
  const handleClick1=()=>{
    navigate1('/register')
  }
  const nav=useNavigate();
  const handleClick2=()=>{
    nav('/about')
  }
  const navigate2=useNavigate();
  const handlepro=()=>{
    navigate2('/profile')
  }
  return (
    <div className='nava'>
      <div className='nava-logo'>
      <img src={img1} width={80} height={80}></img><br></br>
      DIGITAL-{props.data.Arr1}
     </div>
      <ul className='nava-menu'>
        <button onClick={handleClick} className='nava-contact'>{props.data.Arr2}</button>
        <button onClick={handleClicks} className='nava-contact'>{props.data.Arr3}</button>
        <button onClick={handleClick2} className='nava-contact'>{props.data.Arr4}</button>
        <button onClick={handleClick1} className='nava-contact'>{props.data.Arr5}</button>
        <img src={img2} onClick={handlepro} width={40} height={40}></img>
      </ul>
    </div>
  )
}

export default Navbar