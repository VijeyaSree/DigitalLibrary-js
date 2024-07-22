import React from 'react'
import '../Hero/Hero.css'
import arrow_btn from '../Image/arrowicon.png'
import play_icon from '../Image/playicon.png'
import pause_icon from '../Image/pause.png'
import { useNavigate } from 'react-router-dom'

const Hero = ({setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate('/Explore the feature')
  }
  return (
    <div className='hero'>
      <div className='hero-text'>
      </div>
      <div className='hero-explore'>
        <p>Explore the features</p>
        <img src={arrow_btn} width={40} height={40} onClick={handleclick} alt='' />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>      
            <div className='hero-play'>
                <img  onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} width={30} height={30} alt=""/>
                <p>See The Video</p>
            </div>
            </div>
    </div>
  )
}

export default Hero