import React from 'react'
import '../../css/header.css'

function Headers() {
    return (
        <>
            <nav class="cNavbar navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Notes Yard</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {/* <li class="nav-item d-flex align-items-center">
                            <a class="nav-link" href="#">Home</a>
                        </li> */}
                    </ul>

                </div>
                        <li class="nav-item position-relative d-flex align-items-center">
                                <input class="searchNotebooks" type="search" placeholder="Search" aria-label="Search" />
                                <button class="search-btn material-icons" type="submit">search</button>
                        </li>
                        <img className="profile" src="https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png" alt=""/>
                        {/* <img style={{width: '34px',borderRadius:'50%', cursor: 'pointer',marginRight:'8vw'}} src="https://p.kindpng.com/picc/s/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png" alt=""/> */}
            </nav>
        </>
    )
}

export default Headers
