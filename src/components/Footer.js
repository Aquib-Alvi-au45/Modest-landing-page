import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                © Copyright 2014 by PSD Booster. All Rights Reserved.
            </p>
            <div>
                <button><ion-icon name="logo-twitter"></ion-icon></button>
                <button><ion-icon name="logo-facebook"></ion-icon></button>
                <button><ion-icon name="logo-skype"></ion-icon></button>
                <button><ion-icon name="logo-behance"></ion-icon></button>
                <button><ion-icon name="logo-linkedin"></ion-icon></button>
            </div>
        </footer>
    )
}

export default Footer
