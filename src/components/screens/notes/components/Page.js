import React from 'react'
import '../css/page.css'

function Page(props) {
    return (
        <div className='pageBody'>
            <div className="content">
                <h6>{props.title}</h6>
                <p>{props.description}</p>
            </div>
            <div className="operations">
                <span className="material-icons" >edit</span>
                <span className="material-icons">visibility</span>
                <span className="material-icons">delete</span>
            </div>
            <div className="updatedDate">
                31 Dec 
            </div>
        </div>
    )
}

export default Page
