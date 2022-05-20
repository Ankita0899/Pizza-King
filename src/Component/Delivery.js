import React from 'react'
import './Delivery.css'

export default function Delivery() {
    return (
        <>
            <div className='container-fluid'>
                <div className='delivery'>
                    <div className="card bg-dark text-white">
                        <img className="card-img" src="/Images/img7.png" alt="Delivery" />
                        <div className="card-img-overlay my-3">
                            <h2 className="card-title text-danger">Delivery</h2>
                            <p className="card-text text-danger">-We Have Fastest And Free Deliver For Our Customers</p>
                            <div className='Card-text'>
                                <h2 className='card-title2 text-danger'>Safe Delivery</h2>
                                <p className='card-title2 text-danger'>-We Deliver Safe Products For Your For Your Good Health</p>
                                <h2 className='text-danger'>100% Safe Delivery</h2>
                                <a href='#' className='btn btn-outline-warning'>Order Now</a>
                            </div>
                            <h2 className='text-danger'>100% FRee Delivery</h2>
                            <a href='#' className='btn btn-outline-warning'>Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
