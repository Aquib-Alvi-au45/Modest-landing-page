import React from 'react'
import './Work.css'
import OutlineBtn from './common/OutlineBtn'
import RopeWay from '../assets/ropeway.png'
import Skate from '../assets/skate.png'
import Road from '../assets/road.png'
import Sea from '../assets/sea.png'
import Mountain from '../assets/mountain.png'
import Bird from '../assets/bird.png'

const Work = () => {
    return (
        <section className='work'>
            <h1><span></span> lovely work.</h1>
            <div className='work-gallery'>
                <div>
                    <img src={RopeWay} />
                    <img src={Skate} />
                    <img src={Road} />
                </div>
                <div>   
                    <img src={Sea} />
                    <img src={Mountain} />
                    <img src={Bird} />
                </div>
                <OutlineBtn title='show me more'/>
            </div>
        </section>
    )
}

export default Work
