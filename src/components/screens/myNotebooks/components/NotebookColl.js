import React ,{useContext, useEffect} from 'react'
import CreateNotebook from './CreateNotebook'
import Notebook from './Notebook'
import {notebookCoverUrl} from '../../../common/Helper'
import NotebookContext from '../../../../context/NotebookContext'

function NotebookColl() {
    const Context = useContext(NotebookContext)
    const {notebooks, setNotebooks,getNotebooks} = Context
    useEffect(() => {
        getNotebooks()
    }, [])
    return (
        <>
            <div className="d-flex bookArrange" >
                <div className="d-flex" style={{width: "90%", flexWrap: "wrap" }}>
                     {notebooks.map((e) => {
                        return <Notebook key={e._id} id={e._id} data={e} title={e.notebookTitle} cover={e.notebookCover} />
                    })}

                     {/* <Notebook title="Personal" url={notebookCoverUrl[Math.round(18 * Math.random())]} /> */}
                   
                    <CreateNotebook />
                </div>
            </div>  
        </>
    )
}

export default NotebookColl
