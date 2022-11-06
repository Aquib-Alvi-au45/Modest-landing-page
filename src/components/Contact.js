import React from 'react'
import './Contact.css'
import GoogleMapReact from 'google-map-react';
import FillBtn from './common/FillBtn'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <section className='contact'>
            <h1><span></span> we are modest.</h1>
            <div className='map' style={{ height: '40vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
            <div className='contact-content'>
                <div className='contact-info'>
                    <h3>contact information</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Sed nisi metus, tristique nec dolor non, ornare sagittis dolor.<br />
                        Nulla vestibulum lacus sed molestie gravida.
                    </p>
                    <p>
                        Cras fermentum elit quis magna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus
                    </p>
                </div>
                <div className='contact-form'>
                    <form>
                        <table>
                            <tr>
                                <td><label>YOUR NAME</label></td>
                                <td><label>YOUR EMAIL</label></td>
                            </tr>
                            <tr>
                                <td><input type='text' /></td>
                                <td><input type='email' /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>YOUR MESSAGE</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan='2'>
                                    <textarea id="story" name="story"
                                        rows="10" cols="46">
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td><FillBtn title='send message' /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact
