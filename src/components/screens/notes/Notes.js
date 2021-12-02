import React from 'react'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import NotesColl from './components/NotesColl'

function Notes() {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="d-flex">
                <Sidebar />
                <div className="d-flex flex-column">
                    <main className="mainContent d-flex flex-column">
                        <PageHeader header="Notes" />
                            <div className="notebookColl">
                                <NotesColl/>
                            </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Notes
