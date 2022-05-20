import React, { useState } from 'react'

export default function Carditems(props) {

    const [Count, SetCount] = useState(0);

    function increase() {
        SetCount(Count + 1);
    }

    function decrease() {
        SetCount(Count - 1);
    }

    return (
        <>
            <div className='Carditem mx-2'>
                <div className="card" style={{ width: '18rem;' }}>
                    <img className="card-img-top" src={props.image} alt="Pizza" />
                    <div className="card-body">
                        <h5 className="card-title text-danger">{props.title}</h5>
                        <p className="card-text text-danger">{props.text}</p>
                        <div className='Add-cart d-flex'>
                            <button onClick={increase} className="btn btn-outline-warning mx-2">{props.btn1}</button>
                            <h2 className='text-danger mx-2'>{Count}</h2>
                            <button onClick={decrease} className="btn btn-outline-warning mx-2">{props.btn2}</button>

                            <a href="#" className="btn btn-outline-warning mx-2">{props.btn3}</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
