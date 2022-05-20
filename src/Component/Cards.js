import React from 'react'
import Carditems from './Carditems'
import source from './Source'
import './Card.css'

function getdata(source) {
    return (
        <>

            <Carditems
                image={source.image}
                title={source.title}
                text={source.text}
                btn1={source.btn1}
                btn2={source.btn2}
                btn3={source.btn3}
            />

        </>
    )

}
export default function Cards() {
    return (
        <>
            <div className='container'>
                <div className='cards'>
                    {source.map(getdata)}
                </div>
            </div>
        </>
    )
}
