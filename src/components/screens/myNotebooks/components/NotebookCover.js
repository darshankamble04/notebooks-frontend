import React from 'react'

function NotebookCover(props) {
    const {setnotebookCover ,notebookCover ,url} = props
  return (
    <div className={`coverImg ${notebookCover===url?"addAfter":""}`} onClick={()=>{setnotebookCover(url)}} style={{ background: `url(${url})` }}></div>
  )
}

export default NotebookCover