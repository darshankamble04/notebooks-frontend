import React, { useState, useContext, useRef, useEffect } from 'react'
import CoverImgs from '../../../common/Helper'
import '../css/createNotebook.css'
import { Link } from 'react-router-dom'
import NotebookContext from '../../../../context/NotebookContext'
import NoteContext from '../../../../context/NoteContext'
import NotebookModal from './NotebookModal'

function Notebook(props) {
    const Context = useContext(NotebookContext)
    const { updateNotebooks, deleteNotebooks, addbookmark, removebookmark, setEData, setnotebookCover, notebookCover, notebookTitle, setnotebookTitle, id, setId, setLoading } = Context;
    const context = useContext(NoteContext)
    const { userNotes, getuserNotes } = context
    const [onClickLoader, setOnClickLoader] = useState(false)

    const toggleEdit = (data) => {
        setEData({ enotebookTitle: data.notebookCover, eid: data._id, enotebookCover: data.notebookTitle })
        setnotebookCover(data.notebookCover)
        setnotebookTitle(data.notebookTitle)
        setId(data._id)
    }

    
    useEffect(() => {
        getuserNotes()
        // eslint-disable-next-line
    }, [])
    const toggleBookMarks = () => {
        if (props.data.bookmark) {
            removebookmark(props.id);
        } else {
            addbookmark(props.id);
            setLoading(true);
        }

    }
    let pathname = window.location.pathname;
    pathname = pathname.split('/')
    return (
        <>
            <Link onClick={() => { toggleEdit(props.data) }} to={`/mynotebooks/${props.id}/${props.title}`} className="outline " >
                <img className="spiral" src="https://cdn.classmateshop.co.in/live/Front-Assets/FrontEnd/SPIRAL.svg" alt="" />
                <div className="inline" style={{ background: `url(${props.cover})` }}>
                    <div className="dots"></div>
                    <div className="NotebookName">
                        <div >{props.title}</div>
                        <div style={{ color: '#9e9e9e', fontSize: "0.7rem" }} >

                            {userNotes.filter((e) => { return e.notebook === props.id }).length === 0 || userNotes.filter((e) => { return e.notebook === props.id }).length === 1 ? "Note" : "Notes"}
                            {' '}
                            {userNotes.filter((e) => { return e.notebook === props.id }).length}

                        </div>

                        <button className={`box-btn2 btn ${onClickLoader ? "" : "d-none"}`}>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            {" "} Loading...
                        </button>

                    </div>
                    {/* Toggle Bookmark */}
                    <div className={`${props.data.bookmark ? "bookmarked slowDown1" : "invisible"}`}>
                        <span className={`material-icons ${props.data.bookmark ? "bookmarked slowDown2" : "invisible"}`}>bookmark</span>
                    </div>
                    <Link to={`/${pathname[1]}`} className="menu d-flex flex-column position-absolute">
                        <span onClick={() => { toggleEdit(props.data) }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight02" aria-controls="offcanvasRight" className="tooltip  material-icons" >edit
                            <span class="tooltiptext">Edit</span>
                        </span>

                        <span onClick={toggleBookMarks} className="tooltip material-icons " style={{ color: `${props.data.bookmark ? "red" : ""}` }}>bookmark
                            <span class="tooltiptext">Bookmark</span>
                        </span>

                        <span onClick={() => { setOnClickLoader(true); deleteNotebooks(props.id); setLoading(true); }} className="tooltip  material-icons">delete
                            <span class="tooltiptext">Delete</span>
                        </span>
                    </Link>
                </div>
            </Link>
            {/* Edit Notebook Modal */}
            <NotebookModal action="Edit" />

            {/* <div class="canvasC offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight02" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Edit Notebook</h5>

                    <span ref={autoClick} type="button" className="material-icons closeBtn" data-bs-dismiss="offcanvas" aria-label="Close">close</span>
                </div>
                <div className="offcanvas-body">
                    <div className="mb-1 d-grid inputsN">
                        <form className="d-flex">

                            <div className="coverImg selectedImg" style={{ background: `url(${notebookCover})` }}></div>

                            <div className="d-flex flex-column" style={{ padding: "0 0 0 28px" }}>
                                <label className="form-label" id="notebookname">Notebook Name</label>
                                <input value={notebookTitle} type="text" className="form-control" placeholder="Untitled" onChange={(e) => { setnotebookTitle(e.target.value) }} required />
                                <div style={{ color: "red" }} className={`form-text ${isEmpty ? "visible" : "invisible"}`}>Notebook name cannot be blank </div>
                                <button onClick={(e) => { submitNotebook(e, props.id) }} className="addNotebookbtn">Edit Notebook</button>
                            </div>
                        </form>
                        <label className="form-label" style={{ width: 'max-content' }}>Notebook Cover</label>
                    </div>

                    <div className="coverImgs">
                        <CoverImgs notebookCover={notebookCover} setnotebookCover={setnotebookCover} />
                    </div>
                </div>
            </div> */}
            {/* <EditNotebook task="Edit" /> */}
        </>
    )
}

export default Notebook
