import React, { useState, useEffect } from 'react';
import './Navbar.css';

const AdminNavbar = () => {
    const [isSticky, setSticky] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const [name, setName] = React.useState("");
    const [admin, setAdminName] = React.useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 99) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    useEffect(() => {
        const myData = localStorage.getItem('myData');
        const myDataObject = JSON.parse(myData);
        const islogin = myDataObject;
        setAdminName(myDataObject?.name)
        console.log(islogin)
        if (islogin == null) {
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    }, [isLogin])

    const handleLogout = () => {
        localStorage.removeItem("myData");
    };

    useEffect(() => {
        const name = localStorage.getItem("name");

        if (name !== null || name !== undefined) {
            setName(name);
        }
    }, [name]);

    const handleuserLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.href = "/";
    };

    const str = window.location.href;

    const isDashboard = str.includes("/Dashboard");
    const isalltrains = str.includes("/alltrains");
    const isallbookings = str.includes("/allbookings");
    const islogin = str.includes("/login");
    const isallagents = str.includes("/allagents");
    const isallusers = str.includes("/allusers");

    const [isDownloadDropdownOpen, setIsDownloadDropdownOpen] = useState(false);
    return (
        <div className='admind '>
            <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} >
                <div className="container-fluid">
                    <div className="navbar-heading mt-2">
                        <h3 style={{ marginLeft: '30px' }}>
                            <a className="navbar-h ms-5" to="/Dashboard">
                                <img src="https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-train-illustration-png-image_6435933.png" style={{ height: '50px' }} alt="Logo" className="logo-image me-3" />
                                Train Go Admin
                            </a>
                        </h3>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" style={{ marginRight: '5%' }}>
                            <li className="nav-item">
                                <a className={`nav-link nav-link-a-text me-3 ${isDashboard ? 'active' : ''}`} href="/Dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav-link-a-text me-3 ${isallagents ? 'active' : ''}`} href="/allagents">Agent Management</a>
                            </li>

                            <li className="nav-item">
                                <a href='/alltrains' className={`nav-link me-3 nav-link-a-text ${isalltrains ? 'active' : ''}`}>Train Management</a>
                            </li>

                            <li className="nav-item">
                                <a href='/allbookings' className={`nav-link me-3 nav-link-a-text ${isallbookings ? 'active' : ''}`}>  Booking Management</a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link nav-link-a-text me-3 ${isallusers ? 'active' : ''}`} href="/allusers" >User Management</a>
                            </li>

                            <li className="nav-item dropdown" onClick={() => setIsDownloadDropdownOpen(!isDownloadDropdownOpen)}>
                                {!isLogin ? (
                                    <a
                                        className={`nav-link nav-link-a-text me-3 dropdown-toggle ${islogin ? 'active' : ''}`}
                                        type="button"
                                        role="button"
                                        id="downLoadDropdown"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded={isDownloadDropdownOpen}
                                    >
                                        {admin}
                                    </a>
                                ) : (
                                    name ? (
                                        <a
                                            className={`nav-link nav-link-a-text me-3 dropdown-toggle ${islogin ? 'active' : ''}`}
                                            type="button"
                                            role="button"
                                            id="downLoadDropdown"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded={isDownloadDropdownOpen}
                                        >
                                            {name}
                                        </a>
                                    ) : (
                                        <a
                                            className={`nav-link nav-link-a-text me-3 dropdown-toggle ${islogin ? 'active' : ''}`}
                                            type="button"
                                            role="button"
                                            id="downLoadDropdown"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded={isDownloadDropdownOpen}
                                        >
                                            Login
                                        </a>
                                    )
                                )}



                                <ul className={`dropdown-menu${isDownloadDropdownOpen ? ' show' : ''}`} aria-labelledby="downLoadDropdown">
                                    {(!isLogin ? (
                                        <div>
                                            <li>
                                                <a
                                                    className={`dropdown-item `}
                                                    href="/adminProfile"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className={`dropdown-item `}
                                                    href="/login"
                                                    onClick={handleLogout}
                                                >
                                                    LogOut
                                                </a>
                                            </li>
                                        </div>
                                    ) : (
                                        name ? (
                                            <div>
                                                <li>
                                                    <a
                                                        className={`dropdown-item `}
                                                        href="/profile"
                                                    >
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={`dropdown-item `}
                                                        href="/login"
                                                        onClick={handleuserLogout}
                                                    >
                                                        LogOut
                                                    </a>
                                                </li>
                                            </div>
                                        )
                                            : (
                                                <div>
                                                    <li>
                                                        <a
                                                            className={`dropdown-item `}
                                                            href="/admin"
                                                        >
                                                            Agent Login
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className={`dropdown-item `}
                                                            href="/login"
                                                        >
                                                            User Login
                                                        </a>
                                                    </li>
                                                </div>
                                            )
                                    ))}

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;