import React from 'react'
import './Team.css'
import GloriaImg from '../assets/gloria.png'
import PaulImg from '../assets/paul.png'
import JudithImg from '../assets/judith.png'
import ReedImg from '../assets/reed.png'

const Team = () => {
    return (
        <section className='team'>
            <h1><span></span> meet the team.</h1>
            <div className='img-gallery'>
                <div className='box'>
                    <img src={GloriaImg} alt='first-member' />
                    <div>
                        <span className='member-name'>GLORIA BROMLEY</span>
                        <span className='designation'>CEO and Founder</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={PaulImg} alt='second-member' />
                    <div>
                        <span className='member-name'>PAUL TORRES</span>
                        <span className='designation'>Head of Development</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={JudithImg} alt='third-member' />
                    <div>

                        <span className='member-name'>JUDITH GILLETTE</span>
                        <span className='designation'>Graphic Designer</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={ReedImg} alt='fourth-member' />
                    <div>
                        <span className='member-name'>DELORES REED</span>
                        <span className='designation'>Client Server Director</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
