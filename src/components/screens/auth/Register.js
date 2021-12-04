import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import NotebookContext from '../../../context/NotebookContext';
import Footer from '../../common/Footer';
import Headers from '../../common/Headers';
import Sidebar from '../../common/Sidebar';

function Register() {
    const [notMatch, setnotMatch] = useState(false)
    const context = useContext(NotebookContext)
    const clicked = useRef(null)

    
    const {loading, setLoading, credentials, setCredentials } = context
    const webUrl = process.env.REACT_APP_WebUrl;

    const toggleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const toggleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // setCredentials({email:credentials.email,password:credentials.password})
        if (credentials.Password === credentials.cPassword) {

            const response = await fetch(`${webUrl}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
            })
            const json = await response.json()
            if (json.error) {
                console.error(json.error)
                setCredentials({})
            }
            // if (json.success) {
            //     localStorage.setItem('token', json.token)
            //     history.push('/')
            // }
            if (json.success) {
                alert(json.msg)
            }
        }
        else {
            setnotMatch(true);
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
                <main className="mainContent d-flex flex-column" style={{overflowY:'hidden'}}>
                    <div className="notebookColl d-flex flex-column justify-content-between">
                            <div className="container loginOutline" style={{minHeight: "72vh"}}>
                            <form action="#">
                        <div className="title">Register</div>
                        <div className="input-box underline">
                            <input value={credentials.name} name="name" onChange={(e) => { toggleChange(e) }} type="text" placeholder="Enter Your Name" required />
                            <div className="underline"></div>
                            <div style={{ color: "red" }} className={`form-text ${!credentials.name === undefined ? "visible" : "invisible"}`}>Name cannot be blank!</div>
                        </div>
                        <div className="input-box underline">
                            <input value={credentials.email} name="email" onChange={(e) => { toggleChange(e) }} type="text" placeholder="Enter Your Email" required />
                            <div className="underline"></div>
                            <div style={{ color: "red" }} className={`form-text ${!credentials.email === undefined ? "visible" : "invisible"}`}>Name cannot be blank!</div>
                        </div>
                        <div className="input-box">
                            <input value={credentials.password} name="password" onChange={(e) => { toggleChange(e) }} type="password" placeholder="Enter Your Password" required />
                            <div className="underline"></div>
                            <div style={{ color: "red" }} className={`form-text ${notMatch ? "visible" : "invisible"}`}>Password doesn't match!</div>

                        </div>
                        <div className="input-box">
                            <input value={credentials.cpassword} name="cpassword" onChange={(e) => { toggleChange(e) }} type="password" placeholder="Enter Your Confirm Password" required />
                            <div className="underline"></div>
                            <div style={{ color: "red" }} className={`form-text ${notMatch ? "visible" : "invisible"}`}>Password doesn't match!</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="input-box button">
                                <input ref={clicked} onClick={(e) => { toggleSubmit(e) }} type="submit" name="" value="Continue" />
                            </div>
                            <div className="option">or</div>
                            <div className="google">
                                {/* <GoogleLogin
                                    onClick={setGoogleLogin(true)}
                                    clientId="73289997498-ldv2fbop9ck81a1renoih54hbqejpii7.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle2}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                >
                                    <Link to="#">Register With Google</Link>
                                </GoogleLogin> */}
                                {/* document.getElementById('googleButton') */}
                            </div>
                        </div>
                    </form>
                    <div className="option2">Already Have Account? <Link to='/login' className="">Login</Link></div>
                            </div>
                    <Footer />
                    </div>
                </main>
            </div>
        </div>
    </>
    )
}

export default Register
