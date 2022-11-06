import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about'>
      <h1><span></span> we are modest.</h1>
      <div className='about-main'>
        <div className='main-left'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at.
          </p>
          <p>
            Phasellus sollicitudin ante eros ornare, <strong>sit amet luctus lorem semper.</strong> Suspendisse<br /> posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg<br /> egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu<br /> vestibulum.
          </p>
          <button className='social-btn'><ion-icon name="logo-facebook"></ion-icon></button>
          <button className='social-btn'><ion-icon name="logo-twitter"></ion-icon></button>
          <button className='social-btn'><ion-icon name="logo-google"></ion-icon></button>
          <button className='social-btn'><ion-icon name="logo-dribbble"></ion-icon></button>
          <button className='social-btn'><ion-icon name="logo-behance"></ion-icon></button>

        </div>
        <div className='main-right'>
          <div className='article'>
            <div className='num-box'>
              01
            </div>
            <div>
              <h2>dedication to the customers</h2>
              <p>
                Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus.
              </p>
            </div>
          </div>
          <div className='article'>
            <div className='num-box'>02</div>
            <div>
              <h2>working closely with our clients</h2>
              <p>
                Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh.
              </p>
            </div>
          </div>
          <div className='article'>
            <div className='num-box'>
              03
            </div>
            <div>
              <h2>increase happiness</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend laoreet euismod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
