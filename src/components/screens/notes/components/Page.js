import React, { useContext, useRef, useState } from 'react'
import NoteContext from '../../../../context/NoteContext'
import '../css/page.css'
import '../css/createPage.css'

function Page(props) {
    const Context = useContext(NoteContext)
    const { NoteTitle, editNote,color, setColor,show , setShow,editNoteVal,NoteDescription,deleteNote, setNoteDescription, setEditNoteVal, setNoteTitle } = Context
    let date = new Date(props.date)
    date = date.toString()
    let arr = date.split(" ")
    let month = arr[1]
    let day = arr[2]
    const closeRef = useRef(null)

    const toggleClick = (data) => {
        const { title, description, _id } = data
        setEditNoteVal({ title, description, id: _id })
        setNoteTitle(title)
        setNoteDescription(description)
        setColor(data.color)

    }
    const [isEmpty, setIsEmpty] = useState(false)

    const toggleSubmit = () => {
        // eslint-disable-next-line
        if (!NoteTitle.length == 0) {
            const { id } = editNoteVal
            editNote({ title: NoteTitle, description: NoteDescription, id })
            setShow(false)
            closeRef.current.click()
            setIsEmpty(false)
            
        } else {
            setIsEmpty(true)
        }
    }
    return (
        <>
            <div className='pageBody' style={{backgroundColor:`${props.color}`}}>
                <div className="content">
                    <h6>{props.title}</h6>
                    <p>{props.description}</p>
                </div>
                <div className="operations">
                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onClick={() => { toggleClick(props.data) }} className="material-icons" >edit</span>

                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop01" className="material-icons">visibility</span>
                    <span className="material-icons" onClick={() => { deleteNote(props.id) }}>delete</span>
                </div>
                <div className="updatedDate">
                    {month}{" "}{day}
                </div>
            </div>
            <div className="modal fade" style={{ overflowY: "hidden" }} id="staticBackdrop01" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div style={{ backgroundColor: `${color}` }} className="costomModal modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div style={{ backgroundColor: `${color}` }} className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{NoteTitle}</h5>
                            <span className="mx-3 material-icons" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">edit</span>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <textarea  style={{ height: '82vh',backgroundColor:`${color}` }} value={NoteDescription} disabled className="modal-body"></textarea>
                    </div>
                </div>
            </div>
            {/* Edit Note */}
            <div className="modal fade" style={{ overflowY: "hidden" }} id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div style={{ backgroundColor: `${color}` }} className="costomModal modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div style={{ backgroundColor: `${color}` }} className="modal-header">

                            <div className="input-box d-flex">
                                <input value={NoteTitle} onChange={(e) => { setNoteTitle(e.target.value) }} type="text" className="titletoedit  form-control" placeholder="Untitled" />

                               <div style={{ backgroundColor: `${color}` }} onClick={()=>{!show?setShow(true):setShow(false)}} className="colorBox" ></div>

    <div className={`${show?'d-flex visible open':'d-flex invisible'}`}>
            <div onClick={()=>{setShow(false); setColor('rgb(255,156,0)')}} style={{ backgroundColor: 'rgb(255,156,0)' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('rgb(179,181,182)')}} style={{ backgroundColor: 'rgb(179,181,182)' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('rgb(0,150,168)')}} style={{ backgroundColor: 'rgb(0,150,168)' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('rgb(212,224,227)')}} style={{ backgroundColor: 'rgb(212,224,227)' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('#ff8585e0')}} style={{ backgroundColor: '#ff8585e0' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('#fff')}} style={{ backgroundColor: '#fff' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('rgb(255,217,33)')}} style={{ backgroundColor: 'rgb(255,217,33)' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('rgb(254,128,129)')}} style={{ backgroundColor: 'rgb(254,128,129)' }} class="dropdown-item colors"></div>
            <div onClick={()=>{setShow(false); setColor('rgb(104,176,50)')}} style={{ backgroundColor: 'rgb(104,176,50)' }} class="dropdown-item colors"></div>
    </div>     
                                    
                                </div>
                            <div className={`position-fixed bottom-0 end-0 p-3 ${isEmpty ? "visible" : "invisible"}`} style={{ zIndex: '11' }}>
                                <div id="liveToast">
                                    <div className="toast-header">
                                        <small className="me-auto">
                                            <label style={{ color: "red", marginRight: '14px' }} className={`form-label d-flex my-2 `}><span className="material-icons mx-2">error_outline</span><span>Note Title cannot be blank</span> </label>
                                        </small>
                                    </div>
                                </div>
                            </div>


                            <button ref={closeRef} type="button" className="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                            <span className="material-icons" style={{ fontSize: '2.2rem' }} onClick={toggleSubmit}>done</span>
                        </div>
                        <textarea style={{ height: '82vh',backgroundColor:`${color}` }} value={NoteDescription} onChange={(e) => { setNoteDescription(e.target.value) }} className="form-control"></textarea>
            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
