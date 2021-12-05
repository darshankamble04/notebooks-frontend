import React from 'react'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import NotesColl from './components/NotesColl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Notes() {
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
                                <NotesColl/>
                            </div>
                        <Footer/>
                    </main>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Notes
