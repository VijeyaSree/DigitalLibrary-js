import React, { useState } from 'react'
import Modal from './Modal'



const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book)
  
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail != undefined && amount != undefined) {
            return (
              <>
                <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                  <img src={thumbnail} ></img>
                  <div className='bottom'>
                    <p className='amount'>&#8377;{amount}</p>
                    <h3 className='title'>{item.volumeInfo.title}</h3><br></br>
                  </div>
                </div>
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
              </>
            )
          }


        })
      }
    </>
  )



}

export default Card;