import React from 'react'
import '../../css/sidebar.css'
import HomeIcon from '../../assets/img/homeIcon.png'
import notebookIcon from '../../assets/img/notebookIcon.png'
import notesIcon from '../../assets/img/notesIcon.png'
import logoutIcon from '../../assets/img/logoutIcon.png'
import { Link } from 'react-router-dom'
// import logoutIcon from '../../assets/img/icons8_Logout.ico'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                {/* <label style={{height:"100px"}}  className="sidebarLabel">
                    <img style={{width:"70px",borderRadius:'50%'}} src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                    User
                </label> */}
                <Link to="/" className="sidebarLabel sidebarLabelSelected">
                    {/* <img src={HomeIcon} alt="" /> */}
                    <span class="mx-2 material-icons">home</span>
                    <span className="">Home</span>
                </Link>
                <Link to="/mynotebooks" className="sidebarLabel">
                    <img className="mx-2" src={notebookIcon} alt="" />
                    <span >Notebooks</span>
                </Link>
                <label className="sidebarLabel">
                    <img className="mx-2" src={notesIcon} alt="" />
                    <span>All Notes</span>
                </label>
                <label className="sidebarLabel">
                    <span class="mx-2 material-icons">grade</span>
                    <span>Bookmarks</span>
                </label>
                {/* <label className="sidebarLabel">
                    <span class="material-icons">book</span>
                    Bookmarks
                </label> */}
            </div>
            <label className="sidebarLabel">
                <img className="mx-2" src={logoutIcon} alt="" />
                {/* <span style={{fontWeight:'600'}} class="material-icons">logout</span> */}
                <span>Logout</span>
            </label>
        </div>
    )
}

export default Sidebar
