import React from 'react'

export default function Textpad() {
    return (
        <>
            <div className='container bg-white my-5'>
                <div className='row'>
                    <div className='col-md-6 my-5'>
                        <img src='/Images/img6.jpg' className='img-fluid' alt='error' style={{borderRadius:'20px'}}/>
                    </div>
                    <div className='col-md-6 my-5'>
                        <h2 className='text-center text-danger'>Delicious-Pizza</h2>
                        <p className='text-danger'>Pizza is a dish of Italian origin consisting of a 
                            usually round, flat base of leavened wheat-based 
                            dough topped with tomatoes, cheese, and often various 
                            other ingredients, which is then baked at a high 
                            temperature, traditionally in a wood-fired oven. 
                            A small pizza is sometimes called a pizzetta.
                        </p>
                        <h4 className='text-danger'>Nutrients Facts:-</h4>
                        <ul className='text-danger'>
                            <li>Protein:- 11 g</li>
                            <li>Iron:-13%</li>
                            <li>Potassium:-172 mg</li>
                            <li>Sodium:-598 mg</li>
                            <li>Cholesterol:-17 mg</li>
                            <li>Saturated fat:-4.5 g</li>
                            <li>Calories:-266</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
