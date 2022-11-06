import React from 'react'
import FillBtn from './common/FillBtn'
import OutlineBtn from './common/OutlineBtn'
import './Home.css'

const Home = () => {
    return (
        <section className='home'>
            <div>
                <h1>
                    welcome to our marketplace
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor<br />
                    non, ornare sagittis dolor. Nulla vestibulu lacus ...
                </p>

                <FillBtn title='view more' />
                <OutlineBtn title='video tour' />
            </div>

        </section>
    )
}

export default Home
