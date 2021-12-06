import React, { useContext, useEffect } from 'react'
import NotebookContext from '../../../context/NotebookContext'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import Notebook from './components/Notebook'
import './css/myNotebooks.css'
import './css/notebook.css'

function AllBookmarkNB() {
    const Context = useContext(NotebookContext)
    const {notebooks, getBookmarkedNotebooks} = Context

    useEffect(() => {
        getBookmarkedNotebooks()
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
                        <PageHeader header="Notebooks" />
                        <div className="notebookColl d-flex flex-column justify-content-between ">
                            <div className="d-flex bookArrange" >
                                <div className="d-flex" style={{ width: "90%", flexWrap: "wrap" }}>
                                    {notebooks.map((e) => {
                                        return <Notebook key={e._id} id={e._id} data={e} title={e.notebookTitle} cover={e.notebookCover} />
                                    })}
                                </div>
                            </div>
                        <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AllBookmarkNB
