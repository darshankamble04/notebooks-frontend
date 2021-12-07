import React, { useContext, useEffect } from 'react'
import NoteContext from '../../../../context/NoteContext'
import CreatePage from './CreatePage'
import Page from './Page'

function NotesColl() {
    const Context = useContext(NoteContext)
    const {notes,getNotes} = Context
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    console.log(notes)
    return (
        <>
            <div className="d-flex bookArrange" >
                <div className="d-flex W-90" style={{ flexWrap: "wrap" }}>
                {notes.map((e)=>{
                    return <Page key={e._id} id={e._id} data={e} color={e.color} date={e.date } title={e.title} description={e.description} />
                })}
                    <CreatePage/>
                </div>
            </div>
        </>
    )
}

export default NotesColl
