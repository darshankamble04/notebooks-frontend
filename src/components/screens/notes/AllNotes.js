import React, { useContext, useEffect } from 'react'
import NoteContext from '../../../context/NoteContext'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import Page from './components/Page'
function AllNotes() {
    const Context = useContext(NoteContext)
    const {userNotes, getuserNotes } = Context
    useEffect(() => {
        getuserNotes()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="d-flex setHeight">
                <Sidebar />
                <div className="d-flex flex-column">
                    <main className="mainContent d-flex flex-column">
                        <PageHeader header="Notes" />
                        <div className="notebookColl">
                            <div className="d-flex bookArrange" >
                                <div className="d-flex" style={{ width: "90%", flexWrap: "wrap" }}>
                                    {userNotes.map((e) => {
                                        return <Page key={e._id} id={e._id} data={e} color={e.color} date={e.date } title={e.title} description={e.description} />
                                    })}
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>

        </>
    )
}

export default AllNotes
