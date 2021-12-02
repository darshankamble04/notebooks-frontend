import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import './css/style.css'

function Login() {
    const toggleSubmit = () => {

    }
    return (
        <>
        <div>
            <Headers />
        </div>
        <div className="d-flex">
            <Sidebar />
            <div className="d-flex flex-column">
                <main className="mainContent d-flex flex-column" style={{overflowY:'hidden'}}>
                    <div className="notebookColl">
                            <div className="container loginOutline">
                                <form action="#">
                                    <div className="title">Login</div>
                                  
                                    <div className="input-box underline">
                                        <input name="email" onChange={(e) => { }} type="text" placeholder="Enter Your Email" required />
                                        <div className="underline"></div>
                                        <div style={{ color: "red" }} className={`form-text invisible`}>Name cannot be blank!</div>
                                    </div>
                                    <div className="input-box">
                                        <input name="password" onChange={(e) => { }} type="password" placeholder="Enter Your Password" required />
                                        <div className="underline"></div>
                                        <div style={{ color: "red" }} className={`form-text invisible`}>Password doesn't match!</div>

                                    </div>
                                  
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-box button">
                                            <input onClick={(e) => { toggleSubmit(e) }} type="submit" name="" value="Continue" />
                                        </div>
                                        <div className="option">or</div>
                                        <div className="google">

                                        </div>
                                    </div>
                                </form>
                                <div className="option2">New User? <Link to='/register' className="">Register</Link></div>
                            </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    </>
    )
}

export default Login
