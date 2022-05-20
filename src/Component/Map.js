import React from 'react'
import './Map.css'

export default function Map() {
    return (
        <>
            <div className='container bg-white my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='text-danger text-center my-4'>Contact Us:-</h2>
                        <address className='text-danger text-center'>Address:-<br />
                            Phn:- 0621-54255,<br />
                            Loc:-Thane Mumbai,<br />
                            Contact:-9525452554,<br />
                            Visit:-Pizza-King.Com,<br />
                          E-mail:-Pizza-king@gmail.Com,<br /> 
                            Order On:-Swiggy,Zomato,Uber-Eats.<br />
                        </address>

                    </div>
                    <div className='col-md-6 my-3'>
                        <img src='/Images/map.png' className='img-fluid' alt='Map' style={{width: '400px', height: '300px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
