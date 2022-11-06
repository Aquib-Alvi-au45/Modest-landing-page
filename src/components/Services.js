import React from 'react'
import Card from './common/Card'
import Cogs from '../assets/cogs.svg'
import Pencil from '../assets/pencil.svg'
import Phone from '../assets/phone.svg'
import Clock from '../assets/clock.svg'
import './Services.css'








const Services = () => {
    return (
        <section className='services'>
            <h1><span></span> what we do.</h1>
            <div className='container'>
                <div>
                    <Card title='easy theme setup' src={Cogs} />
                    <Card title='pixel perfect design' src={Pencil} />
                    <Card title='responsive design' src={Phone} />
                    <Card title='24/7 support' src={Clock} />
                </div>
                <div>
                    <Card title='easy theme setup' src={Cogs} />
                    <Card title='pixel perfect design' src={Pencil} />
                    <Card title='responsive design' src={Phone} />
                    <Card title='24/7 support' src={Clock} />
                </div>


            </div>
        </section>
    )
}

export default Services
