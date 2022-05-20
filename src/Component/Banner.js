import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <>
      <div className='conatiner-fluid'>
        <img src='/Images/img2.jpg' className='img-fluid imagetop' alt='error' />
        <div className='container'>
          <div className='text'>
            <h2>PIZZA KING</h2>
            <p>Taste One Time Come Many Times</p>
            <button className='btn btn-outline-warning text-white'>Shop Now</button>
          </div>
        </div>
      </div>
    </>

  )
}
