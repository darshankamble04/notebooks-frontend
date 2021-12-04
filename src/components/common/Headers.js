import React, { useContext } from 'react'
import '../../css/header.css'
import { BarLoader } from 'react-spinners'
import { css } from "@emotion/react";
import NotebookContext from '../../context/NotebookContext';
import UserProfile from '../screens/auth/UserProfile';
import '../screens/auth/css/displayUser.css'
function Headers() {
    const Context = useContext(NotebookContext)
    const { loading, setLoading} = Context
    const override = css`
                    position: absolute;
                    width:100%;
                    background:rgb(136 136 136);
                    overflow-y: visible;
                    z-index: 1;
                    `;
    return (
        <div>
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
                        <img  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight5" aria-controls="offcanvasRight"  className="profile" src="https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png" alt=""/>
                        {/* <img style={{width: '34px',borderRadius:'50%', cursor: 'pointer',marginRight:'8vw'}} src="https://p.kindpng.com/picc/s/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png" alt=""/> */}
            </nav>
            <BarLoader size="67%" css={override} color ='rgb(8 210 236)' loading={loading}/>
                        <UserProfile/>
        </div>
    )
}

export default Headers
