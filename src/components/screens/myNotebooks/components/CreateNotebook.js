import React, { useState, useContext, useRef } from 'react'
import NotebookContext from '../../../../context/NotebookContext'
import Alert from '../../../common/Alert'
import CoverImgs, { notebookCoverUrl } from '../../../common/Helper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/createNotebook.css'

function CreateNotebook() {
    const autoClick = useRef(null)
    const Context = useContext(NotebookContext)
    const { addNotebooks } = Context;
    // const [notebookInfo, setNotebookInfo] = useState({notebookTitle:'',notebookCover:3})
    const [notebookCover, setnotebookCover] = useState(Math.round(18 * Math.random()))
    const [notebookTitle, setnotebookTitle] = useState("")
    const [isEmpty, setIsEmpty] = useState(false)

    const submitNotebook = (e) => {
        e.preventDefault()
        // eslint-disable-next-line
        if (!notebookTitle.length == 0) {
            addNotebooks({ notebookTitle, notebookCover })
            setnotebookTitle('')
            autoClick.current.click()
        } else {
            setIsEmpty(true)
        }
    }
    return (
        <>
            <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="outlineC ">
                <img className="spiralC" src="https://cdn.classmateshop.co.in/live/Front-Assets/FrontEnd/SPIRAL.svg" alt="" />
                <div className="dotsC"></div>
                <div className="center d-flex flex-column">
                    <span className="material-icons">add_circle_outline</span>
                    <span className="createn">Create Notebook</span>
                </div>
            </div>

            <div class="canvasC offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Create Notebook</h5>

                    <span ref={autoClick} type="button" className="material-icons closeBtn" data-bs-dismiss="offcanvas" aria-label="Close">close</span>
                </div>
                <div className="offcanvas-body">
                    <div className="mb-1 d-grid inputsN">
                        <form className="d-flex">
                            <div className="coverImg selectedImg" style={{ background: `url(${notebookCoverUrl[`${notebookCover}`]})` }}></div>
                            <div className="d-flex flex-column" style={{ padding: "0 0 0 28px" }}>
                                <label className="form-label" id="notebookname">Notebook Name</label>
                                <input value={notebookTitle} type="text" className="form-control" placeholder="Untitled" onChange={(e) => { setnotebookTitle(e.target.value) }} required />
                                <div style={{ color: "red" }} className={`form-text ${isEmpty ? "visible" : "invisible"}`}>Notebook name cannot be blank </div>
                                <button onClick={(e) => { submitNotebook(e) }} className="addNotebookbtn">Add Notebook</button>
                            </div>
                        </form>
                        <label className="form-label" style={{ width: 'max-content' }}>Notebook Cover</label>
                    </div>

                    <div className="coverImgs">
                        <CoverImgs setnotebookCover={setnotebookCover} />
                    </div>
                </div>
            </div>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
        </>
    )
}

export default CreateNotebook
