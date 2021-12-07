import React, { useContext } from 'react'
import NotebookContext from '../../../context/NotebookContext'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import NotesColl from './components/NotesColl'
function Notes() {
    const Context = useContext(NotebookContext)
    const {notebookTitle} = Context;
    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="d-flex setHeight">
                <Sidebar />
                <div className="d-flex flex-column">
                    <main className="mainContent d-flex flex-column">
                        <PageHeader header={notebookTitle} />
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
