import React from 'react'

export default function Navbar() {
    return (

        <div className='Container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">PIzzA-KinG</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">HOME</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">DELIVERY</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">ABOUT US</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">SUPPORT</a>
                            </li>

                        </ul>
                        <div class="form-inline my-2 my-lg-0">
                            <button class="btn btn-outline-warning my-2 my-sm-0 mx-2 text-white" type="submit">CART</button>
                            <button class="btn btn-outline-warning my-2 my-sm-0 text-white" type="submit">LOG IN</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
