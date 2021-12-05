import React, { useContext } from 'react'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import NotebookColl from './components/NotebookColl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/myNotebooks.css'
import './css/notebook.css'
function MyNotebooks() {

    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="d-flex setHeight">
                <Sidebar />
                <div className="d-flex flex-column">
                    <main className="mainContent d-flex flex-column">
                        <PageHeader header="Notebooks" />
                            <div className="notebookColl">
                                <NotebookColl/>
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

export default MyNotebooks
