import React from 'react'
import { Link } from 'react-router-dom'

function Notebook() {
    return (
        <>
             <Link to='/mynotebooks' className="outline ">
                <img className="spiral" src="https://cdn.classmateshop.co.in/live/Front-Assets/FrontEnd/SPIRAL.svg" alt="" />
                <div className="inline" style={{ background: `url("https://cutt.ly/LYwtpV6")` }}>

                    <div className="dots"></div>

                    <div className="NotebookName">
                        <div >Personal Notebook</div>

                        <div style={{ color: '#9e9e9e', fontSize: "0.7rem" }} >
                           Notes 23
                        </div>
                    </div>

                    <div className="menu d-flex flex-column position-absolute">
                        <Link to="/mynotebooks" className="material-icons" >edit</Link>
                        <Link to="/mynotebooks" className="material-icons">bookmark</Link>
                        <Link to="/mynotebooks" className="material-icons">delete</Link>
                    </div>
                </div>
            </Link>
            {/* <EditNotebook task="Edit" /> */}
        </>
    )
}

export default Notebook
