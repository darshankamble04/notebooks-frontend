import React, { useContext, useEffect, useState } from 'react'
import CreateNotebook from './CreateNotebook'
import Notebook from './Notebook'
import { notebookCoverUrl } from '../../../common/Helper'
import NotebookContext from '../../../../context/NotebookContext'

function NotebookColl() {
    const Context = useContext(NotebookContext)
    const { notebooks,WindowLoading, getNotebooks } = Context

    useEffect(() => {
        getNotebooks()
        // setWindowLoading(loading)

    }, [])
    return (
        <>
                {/* <div className="d-flex bookArrange" >
                    <div className="d-flex" style={{ width: "90%",height:'90vh', flexWrap: "wrap" }}>
                        <div class="outlineForPlaceholder card-body">
                            <p class="NotebookName card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                            </p>
                        </div>
                        <div class="outlineForPlaceholder card-body">
                            <p class="NotebookName card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                            </p>
                        </div>
                        <div class="outlineForPlaceholder card-body">
                            <p class="NotebookName card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                            </p>
                        </div>
                    </div>
                </div> */}

                <div className="d-flex bookArrange" >
                    <div className="d-flex" style={{ width: "90%", flexWrap: "wrap" }}>
                        {notebooks.map((e) => {
                            return <Notebook key={e._id} id={e._id} data={e} title={e.notebookTitle} cover={e.notebookCover} />
                        })}
                        <CreateNotebook />
                    </div>
                </div>
        </>
    )
}

export default NotebookColl
