import React, { useContext } from 'react'
import '../../css/sidebar.css'
// import HomeIcon from '../../assets/img/homeIcon.png'
import notebookIcon from '../../assets/img/notebookIcon.png'
import notesIcon from '../../assets/img/notesIcon.png'
// import logoutIcon from '../../assets/img/logoutIcon.png'
import { Link,useLocation } from 'react-router-dom'
import NotebookContext from '../../context/NotebookContext'
// import logoutIcon from '../../assets/img/icons8_Logout.ico'

function Sidebar() {
    const location = useLocation(null)
    const Context = useContext(NotebookContext)
    const {addclasses} = Context;
    return (
        <div className={`sidebar ${addclasses ? "d-none" : "d-flex"}`}>
            <div className="d-flex flex-column">
                {/* <label style={{height:"100px"}}  className="sidebarLabel">
                    <img style={{width:"70px",borderRadius:'50%'}} src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                    User
                </label> */}
                <Link to="/" className={`sidebarLabel ${location.pathname === '/'? 'sidebarLabelSelected':''}`}>
                    {/* <img src={HomeIcon} alt="" /> */}
                    <span class="mx-2 material-icons">home</span>
                    <span className="">Home</span>
                </Link>
{localStorage.getItem('token')?
            <div className="d-flex flex-column">
                <Link to="/mynotebooks" className={`sidebarLabel ${location.pathname === '/mynotebooks'? 'sidebarLabelSelected':''}`}>
                    <img className="mx-2" src={notebookIcon} alt="" />
                    <span >Notebooks</span>
                </Link>
                <Link to='/allnotes' className={`sidebarLabel ${location.pathname === '/allnotes'? 'sidebarLabelSelected':''}`}>
                    <img className="mx-2" src={notesIcon} alt="" />
                    <span>All Notes</span>
                </Link>
                <Link to="/allbookmarkednotebooks" className={`sidebarLabel ${location.pathname === '/allbookmarkednotebooks'? 'sidebarLabelSelected':''}`}>
                    <span class="mx-2 material-icons">bookmark</span>
                    <span>Bookmarks</span>
                </Link>
            </div>
:
            <div className="d-flex flex-column">
                <Link to='/register' className={`sidebarLabel ${location.pathname === '/register'? 'sidebarLabelSelected':''}`}>
                    <img className="mx-2" src={notesIcon} alt="" />
                    <span>Register</span>
                </Link>
                <Link to='/login' className={`sidebarLabel ${location.pathname === '/login'? 'sidebarLabelSelected':''}`}>
                    <img className="mx-2" src={notesIcon} alt="" />
                    <span>Login</span>
                </Link>
            </div>
            }
            </div>
            <div>
                <label className={`sidebarLabel ${location.pathname === '/contactus'? 'sidebarLabelSelected':''}`}>
                    <span class="mx-2 material-icons">contact_support</span>
                    <span>Contact Us</span>
                </label>
                <label style={{marginBottom:"7px"}} className={`sidebarLabel ${location.pathname === '/about'? 'sidebarLabelSelected':''}`}>
                    <span class="mx-2 material-icons">domain</span>
                    {/* <span style={{fontWeight:'600'}} class="material-icons">logout</span> */}
                    <span>About Us</span>
                </label>
                {/* <label className={`sidebarLabel ${location.pathname === '/'? 'sidebarLabelSelected':''}`}>
                    <img className="mx-2" src={logoutIcon} alt="" />
                    <span style={{fontWeight:'600'}} class="material-icons">logout</span>
                    <span>Logout</span>
                </label> */}
            </div>
        </div>
    )
}

export default Sidebar
