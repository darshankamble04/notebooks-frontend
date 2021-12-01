import React from 'react'
import CreateNotebook from './CreateNotebook'
import Notebook from './Notebook'

function NotebookColl() {
    return (
        <>
            <div className="d-flex bookArrange" >
                <div className="d-flex" style={{width: "90%", flexWrap: "wrap" }}>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <Notebook/>
                    <CreateNotebook />
                </div>
            </div>  
        </>
    )
}

export default NotebookColl
