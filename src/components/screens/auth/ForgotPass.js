import React, { useContext, useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import NotebookContext from '../../../context/NotebookContext'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import './css/style.css'

function ForgotPass() {
    const [credentials, setCredentials] = useState({})
    const toggleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const Context = useContext(NotebookContext)
    const {loading, setLoading} = Context

    const webUrl = process.env.REACT_APP_WebUrl;

    const toggleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // setCredentials({email:credentials.email,password:credentials.password})

            const response = await fetch(`${webUrl}/api/auth/forgotpassword`, {
            // const response = await fetch(`/api/auth/forgotpassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: credentials.email, newpassword: credentials.newpassword }),
            })
            const json = await response.json()
            if (json.error) {
                alert(json.error)
            }
            if (json.success) {
                alert(json.msg)
                // const loginOutline = document.getElementById('loginOutline')
                // loginOutline.innerHTML= json.msg
                // setCredentials({})
            }
            setLoading(false)
    }
    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="d-flex">
                <Sidebar />
                <div className="d-flex flex-column">
                    <main className="mainContent d-flex flex-column" style={{ overflowY: 'hidden' }}>
                        <div className="notebookColl d-flex flex-column justify-content-between">
                            <div className="container loginOutline" style={{ minHeight: "72vh" }}>
                                <form action="#">
                                    <div className="title">Forgot Password</div>
                                    <div className="input-box underline">
                                        <input value={credentials.email} name="email" onChange={(e) => { toggleChange(e) }} type="text" placeholder="Enter Your Email" required />
                                        <div className="underline"></div>
                                        <div style={{ color: "red" }} className={`form-text ${!credentials.email === undefined ? "visible" : "invisible"}`}>Email cannot be blank!</div>
                                    </div>
                                    <div className="input-box">
                                        <input value={credentials.newpassword} name="newpassword" onChange={(e) => { toggleChange(e) }} type="password" placeholder="Enter Your new Password" required />
                                        <div className="underline"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-box button">
                                            <input onClick={(e) => { toggleSubmit(e) }} type="submit" name="" value="Send Request" />
                                        </div>
                                    </div>
                                </form>
                                <div className="option2">I Remember? <Link to='/login' className="">Login</Link></div>
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ForgotPass
