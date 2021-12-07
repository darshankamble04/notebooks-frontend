import React, { useContext, useEffect } from 'react'
import CreateNotebook from './CreateNotebook'
import Notebook from './Notebook'
import NotebookContext from '../../../../context/NotebookContext'

function NotebookColl() {
    const Context = useContext(NotebookContext)
    const { notebooks, getNotebooks, SearchKey, setSearchKey } = Context
    console.log(SearchKey)

    useEffect(() => {
        getNotebooks()
        // setWindowLoading(loading)
        // eslint-disable-next-line
    }, [])
    const outline= document.getElementsByClassName("outline").length
    console.log(outline)
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
                <div id="bookArrange" className="d-flex w-90" style={{ flexWrap: "wrap" }}>
                    {notebooks.map((e) => {
                        if (SearchKey != "") {
                            const title = e.notebookTitle.toLowerCase()
                            if (title.includes(SearchKey)) {
                                return <Notebook key={e._id} id={e._id} data={e} title={e.notebookTitle} cover={e.notebookCover} />
                            }
                        } else {
                            return <Notebook key={e._id} id={e._id} data={e} title={e.notebookTitle} cover={e.notebookCover} />
                        }
                    })
                    }

                     {
                        SearchKey == "" ? <CreateNotebook />:""
                     }
                     {
                          SearchKey !== "" && outline==0?<h4 className="notFound">Notebook not found</h4>:""
                     }
                     
                </div>
            </div>
        </>
    )
}

export default NotebookColl
