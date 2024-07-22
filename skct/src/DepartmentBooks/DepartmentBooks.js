import React, { useState } from 'react'
import img1 from '../Images/book.jpg'
import Books from './Books'
import axios from "axios"
import '../DepartmentBooks/Style.css'

const DepartmentBooks = () => {
 const [search, setSearch] = useState("");
 const [bookData, setData] = useState([]);
 const searchBook=(evt)=>{
  if(evt.key==="Enter"){
      
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAEEnmFmVLZnXQjNLumis9tMWpMMlv3i8o')
    .then(res=>setData(res.data.items))
    .catch(err=>console.log(err))
  }
 }
  return (
    <>
    <div className="header">
        <div className="row1">
            <h1>
                A Room Without Books Is Like<br/>A Body Without a Soul.
            </h1>
        </div>
        </div>
        <div className="row2">
         <h2>Find Your Books</h2>
         <div className="search">
            <input type="text" placeholder="Enter Your Book Name"
            value={search} onChange={e=>setSearch(e.target.value)}
            onKeyPress={searchBook}></input>
            <button>SEARCH</button>
         </div>
         <img src={img1} width={200} height={200}></img>
        </div>
        <div className="container">
          {
        <Books book={bookData}/>
          }
        
        
    </div>
    
    </>
  )
}

export default DepartmentBooks