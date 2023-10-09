import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 99) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const str = window.location.href;

    const isHome = str.includes("/home");
    const isalltrains = str.includes("/alltrains");
    const ismybookings = str.includes("/mybookings");
    const islogin = str.includes("/login");
    const isAboutUs = str.includes("/aboutus");
    const isContactUs = str.includes("/contactUs");

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} >
            <div className="container-fluid">
                <div className="navbar-heading mt-2">
                    <h3 style={{ marginLeft: '30px' }}>
                        <a className="navbar-h ms-5" to="/">
                            <img src="https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-train-illustration-png-image_6435933.png" style={{ height: '50px' }} alt="Logo" className="logo-image me-3" />
                            Train Go
                        </a>
                    </h3>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" style={{ marginRight: '2%' }}>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isHome ? 'active' : ''}`} href="/home">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href='/alltrains' className={`nav-link me-3 nav-link-a-text ${isalltrains ? 'active' : ''}`}>Trains</a>
                        </li>

                        <li className="nav-item">
                            <a href='/mybookings' className={`nav-link me-3 nav-link-a-text ${ismybookings ? 'active' : ''}`}>My Bookings</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isAboutUs ? 'active' : ''}`} href="/aboutus" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isContactUs ? 'active' : ''}`} href="/contactUs" >Contact Us</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${islogin ? 'active' : ''}`} href="/login" >Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;