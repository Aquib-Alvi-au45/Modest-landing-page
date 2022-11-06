import React from 'react'
import Tractor from '../assets/tractor.png'
import Bicycle from '../assets/bicycle.png'
import Scenery from '../assets/scenery.png'
import './Feature.css'
const Feature = () => {
    return (
        <section className='feature'>
            <h1><span></span> features.</h1>
            <div className='feature-gallery'>
                <div>
                    <img src={Tractor} alt='tractor' />
                    <h3>product design:eames chairs</h3>
                    <p>Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs.
                        I would even risk saying that most of us dream about having a nice Eames.</p>
                </div>
                <div>
                    <img src={Bicycle} alt='bicycle' />
                    <h3>elegant and colorfull logos</h3>
                    <p>I’ve always found logo design to be one of the most challenging things to get right.
                        There’s so much that a logo can say about a brand without actually saying it.</p>
                </div>
                <div>
                    <img src={Scenery} alt='scenery' />
                    <h3>a showcase of creative</h3>
                    <p>It’s always interesting to see another designer’s take on a famous website, app or even physical product.
                        Different designers add their own personality and style.</p>
                </div>
            </div>

        </section>
    )
}

export default Feature
