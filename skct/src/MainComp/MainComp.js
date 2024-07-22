import React, { useEffect, useState } from 'react'
import Background from '../Background/Background'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';



const MainComp = () => {
  const obj={
    Arr1: ["Library"],
    Arr2: ["Home"],
    Arr3: ["Explore"],
    Arr4: ["About"],
    Arr5: ["SignUp",]
  }
  
  const heroData=[
      {text1:"Dive into",text2:"what you love"},
      {text1:"Indulge",text2:"your passion"},
      {text1:"Give in to",text2:"your passion"},                                                                      
    ]
    const [heroCount,setHeroCount]=useState(0);
    const [playStatus,setPlayStatus]=useState(true);

    useEffect(()=>{
      setInterval(()=>{
        setHeroCount((count)=>{return count===2?0:count+1})
      }, 3000);
    },[])                                

  return (
   <div>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar data={obj}/>
     <Hero
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}/>
   </div>
    
  )
}


export default MainComp