import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className='Container-fluid bg-white'>
                <div className='row'>
                    <div className='col-md-4 my-3 text-center text-danger'>
                        <h3>Delivery</h3>
                        <a className='text-danger' href='#'>Order Now</a><br />
                        <a className='text-danger' href='#'>View Order</a><br />
                        <a className='text-danger' href='#'>View Cart</a><br />
                    </div>
                    <div className='col-md-4 my-3 text-center text-danger'>
                        <h3>Support</h3>
                        <a className='text-danger' href='#'>Contact Us</a><br />
                        <a className='text-danger' href='#'>About Us</a><br />
                        <a className='text-danger' href='#'>Need Help?</a><br />
                    </div>
                    <div className='col-md-4 my-3 text-center text-danger'>
                        <h3>Useful Links</h3>
                        <a className='text-danger' href='#'>Home</a><br />
                        <a className='text-danger' href='#'>Delivery</a><br />
                        <a className='text-danger' href='#'>Order</a><br />
                    </div>
                    <h4 className='text-center text-danger'>Cpoyright@2022 | Anish Raj | Pizza-King</h4>
                </div>
            </div>
        </>
    )
}
