import React, { useState, useContext, useRef, useEffect } from 'react'
import CoverImgs, { notebookCoverUrl } from '../../../common/Helper'
import '../css/createNotebook.css'
import { Link } from 'react-router-dom'
import NotebookContext from '../../../../context/NotebookContext'

function Notebook(props) {
    const autoClick = useRef(null)
    const Context = useContext(NotebookContext)
    const { updateNotebooks,deleteNotebooks,addbookmark,removebookmark,eData, setEData ,setnotebookCover, notebookCover, notebookTitle, setnotebookTitle,id, setId} = Context;
    // const [notebookInfo, setNotebookInfo] = useState({notebookTitle:'',notebookCover:3})

    // const [notebookCover, setnotebookCover] = useState()
    // const [notebookTitle, setnotebookTitle] = useState("")
    const [isEmpty, setIsEmpty] = useState(false)

    const toggleEdit = (data) => {
        setEData({enotebookTitle:data.notebookCover , eid: data._id, enotebookCover: data.notebookTitle})
        setnotebookCover(data.notebookCover)
        setnotebookTitle(data.notebookTitle)
        setId(data._id)
        // esetdata({ enotebookTitle: data.notebookTitle, eid: data._id, enotebookCover: data.notebookCover })
    }
    
    const submitNotebook = (e) => {
        e.preventDefault()
        // eslint-disable-next-line
        if (!notebookTitle.length == 0) {
            updateNotebooks({ notebookTitle, notebookCover, id })
            setnotebookTitle('')
            autoClick.current.click()
        } else {
            setIsEmpty(true)
        }
    }
    console.log(props.data)
    return (
        <>
            <Link to='/mynotebooks' className="outline ">
                <img className="spiral" src="https://cdn.classmateshop.co.in/live/Front-Assets/FrontEnd/SPIRAL.svg" alt="" />
                <div className="inline" style={{ background: `url(${notebookCoverUrl[`${props.cover}`]})` }}>
                    <div className="dots"></div>
                    <div className="NotebookName">
                        <div >{props.title}</div>
                        <div style={{ color: '#9e9e9e', fontSize: "0.7rem" }} >
                            Notes 23
                        </div>
                    </div>
                    {/* Toggle Bookmark */}
                    <div className={`${props.data.bookmark?"bookmarked":"invisible"}`}>
                        <span className="material-icons">bookmark</span>
                    </div>
                    <div className="menu d-flex flex-column position-absolute">
                        <Link onClick={() => { toggleEdit(props.data) }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight02" aria-controls="offcanvasRight" to="/mynotebooks" className="material-icons" >edit</Link>
                        <Link to="/mynotebooks" onClick={() => { props.data.bookmark?removebookmark(props.id) :addbookmark(props.id) }} className="material-icons" style={{color:`${props.data.bookmark?"red":""}`}}>bookmark</Link>
                        <Link to="/mynotebooks" onClick={() => { deleteNotebooks(props.id) }} className="material-icons">delete</Link>
                    </div>
                </div>
            </Link>

            <div class="canvasC offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight02" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Edit Notebook</h5>

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
                                <button onClick={(e) => { submitNotebook(e,props.id) }} className="addNotebookbtn">Edit Notebook</button>
                            </div>
                        </form>
                        <label className="form-label" style={{ width: 'max-content' }}>Notebook Cover</label>
                    </div>

                    <div className="coverImgs">
                        <CoverImgs setnotebookCover={setnotebookCover} />
                    </div>
                </div>
            </div>
            {/* <EditNotebook task="Edit" /> */}
        </>
    )
}

export default Notebook