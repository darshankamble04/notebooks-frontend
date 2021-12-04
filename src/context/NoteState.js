import React, { useContext, useState } from "react"
import NotebookContext from "./NotebookContext";
import NoteContext from './NoteContext'


function NoteState(props) {

    // BACKEND HOSTED URL :
    const webUrl = process.env.REACT_APP_WebUrl;

    const [notes, setNotes] = useState([])
    const [userNotes, setUserNotes] = useState([])
    const [noteVal, setNoteVal] = useState({ eid: '', etitle: '', edescription: '', etag: '' })
    

    // GET NOTE user specified :~
  const [loading, Setloading] = useState(true)
    // API
    const getuserNotes = async () => {
        Setloading(true)
        const response = await fetch(`${webUrl}/api/notes/fetchusernotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
            },
        })
        const json = await response.json()
        setUserNotes(json)
        Setloading(false)
        
    }
    // GET NOTE :~
    // API
    const getNotes = async () => {
        Setloading(true)
        let pathname = window.location.pathname;
        pathname = pathname.split('/')

        console.log(pathname[2])
        const response = await fetch(`${webUrl}/api/notes/${pathname[2]}/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
            },
        })
        const json = await response.json()
        setNotes(json)
        Setloading(false)

    }
    const [color, setColor] = useState("blue")

    // ADD NOTE :~
    const addNote = async (e) => {
        const { title, description } = e;
        let pathname = window.location.pathname;
        pathname = pathname.split('/')
        let date = new Date()
        console.log(date)
        // API
         await fetch(`${webUrl}/api/notes/${pathname[2]}/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
            },
            body: JSON.stringify({ title, description,color,date }),
        })
        getNotes()
        getuserNotes()
    }

    // DELETE NOTE  :~
    const deleteNote = async (id) => {
        // API
        await fetch(`${webUrl}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
            },
        })

        // CLIENT SIDE SCRIPTING
        const updatedNotes = notes.filter((e) => { return e._id !== id })
        setNotes(updatedNotes)
        getNotes()
        getuserNotes()

    }

    // EDIT NOTE  :~
    const editNote = async (e) => {
        const { title, description,id} = e
        // API
        await fetch(`${webUrl}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
            },
            body: JSON.stringify({ title, description,color}),
        })
        getNotes()
        getuserNotes()

    }

    const [editNoteVal, setEditNoteVal] = useState({ title: '', description: '', id: '' })

    const [NoteTitle, setNoteTitle] = useState('')
    const [NoteDescription, setNoteDescription] = useState('')

    const [notebookCover, setnotebookCover] = useState(Math.round(15 * Math.random()))
    const [notebookTitle, setnotebookTitle] = useState(" ")



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes,editNoteVal, setEditNoteVal,  noteVal, setNoteVal ,NoteTitle, setNoteTitle,NoteDescription, setNoteDescription ,getuserNotes,userNotes,loading, Setloading,notebookCover, setnotebookCover,notebookTitle, setnotebookTitle,color, setColor}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;