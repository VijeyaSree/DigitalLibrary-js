import React from 'react'
import img2 from '../Images/acbook.jpg'
import { useNavigate } from 'react-router-dom'


const Books = ({ book }) => {
  console.log(book)
  
  return (
    <>
      {
        book.map((item) => {
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <>
            <div className="BOOKS">
              <img src={thumbnail}></img>
              <div className="bottom">
                <h3 className="title"></h3>
                <button className="amount">DOWNLOAD</button>
              </div>
            </div>
            </>
          )
        })
      }
    </>
  )
}

export default Books