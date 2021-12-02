import React, { useState } from "react"
import NotebookContext from "./NotebookContext"
const NotebookState = (props) => {

  const webUrl = process.env.REACT_APP_WebUrl;

  const initialNotebooks = [];
  const [notebooks, setNotebooks] = useState(initialNotebooks);

  
  // Get Notebooks :
  const getNotebooks = async () => {
    // Setloading(true)
    const response = await fetch(`${webUrl}/api/notebooks/fetchallnotebooks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
      },
    })
    const json = await response.json()
    setNotebooks(json)
    // Setloading(false)
  }

  // add Notebooks :
  const addNotebooks = async (e) => {
    const { notebookTitle, notebookCover } = e;

    // API
    const response = await fetch(`${webUrl}/api/notebooks/addnotebooks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
      },
      body: JSON.stringify({ notebookTitle, notebookCover }),
    })
    const json = await response.json()
    setNotebooks(notebooks.concat(json))
    getNotebooks()


  }

  // CHANGE THIS 👉 IMP 

  // const [edata, esetdata] = useState({ enotebookTitle: '', eid: '', enotebookCover: '' })
  // const [notebookCover, setnotebookCover] = useState(0)
  // const [notebookTitle, setnotebookTitle] = useState(edata.enotebookTitle)

  // update Notebooks :
  const updateNotebooks = async (e) => {
    const { notebookTitle, notebookCover,id } = e;
    // API
    await fetch(`${webUrl}/api/notebooks/updatenotebook/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
      },
      body: JSON.stringify({ notebookTitle, notebookCover }),
    })
    getNotebooks()
  }

  // Delete Notebooks :
  const deleteNotebooks = async (id) => {
    // API
    await fetch(`${webUrl}/api/notebooks//deletenotebook/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThiODg4MWEzNWYyZTEyNWU1ZjZhOCIsImlhdCI6MTYzODQ0NzQ4OX0._90jzH2sEM4V30NQc3ODvkVJ0skuQqHD-wDb0LLtwxU"
      },
    })
    getNotebooks()
  }


  // credentials, setCredentials,googleLogin, setGoogleLogin,isEmpty, setIsEmpty,countid, setId,loading, Setloading

//  esetdata, edata, setnotebookCover, notebookCover, notebookTitle, setnotebookTitle


  return (
    <NotebookContext.Provider value={{ notebooks, setNotebooks, getNotebooks,addNotebooks, updateNotebooks, deleteNotebooks}}>
      {props.children}
    </NotebookContext.Provider>
  )
}

export default NotebookState;
