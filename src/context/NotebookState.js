import React, { useState } from "react"
import NotebookContext from "./NotebookContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NotebookState = (props) => {

  const webUrl = process.env.REACT_APP_WebUrl;

  const initialNotebooks = [];
  const [notebooks, setNotebooks] = useState(initialNotebooks);
  
  const [loading, setLoading] = useState(false)
  
  // Get Notebooks :
  const getNotebooks = async () => {
    setLoading(true)
    const response = await fetch(`${webUrl}/api/notebooks/fetchallnotebooks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
    })
    const json = await response.json()
    setNotebooks(json)
    setLoading(true)
    setLoading(false)
  }
  
  // Getbookmarked Notebooks :
  const getBookmarkedNotebooks = async () => {
    setLoading(true)
    const response = await fetch(`${webUrl}/api/notebooks/bookmarkednotebooks/:id`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
    })
    const json = await response.json()
    setNotebooks(json)
    setLoading(false)
  }

  // add Notebooks :
  const addNotebooks = async (e) => {
    const { notebookTitle, notebookCover } = e;

    // API
    const response = await fetch(`${webUrl}/api/notebooks/addnotebooks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ notebookTitle, notebookCover }),
    })
    const json = await response.json()
    setNotebooks(notebooks.concat(json))
    getNotebooks()
    toast.success('Bingo! New Notebook Have Been Created Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'light'
  });

  }

  // CHANGE THIS 👉 IMP 

  
  const [eData, setEData] = useState({ enotebookTitle: '', eid: '', enotebookCover: '' })
  const [notebookCover, setnotebookCover] = useState()
    const [notebookTitle, setnotebookTitle] = useState("")
    const [id, setId] = useState("")

  // update Notebooks :
  const updateNotebooks = async (e) => {
    const { notebookTitle, notebookCover,id } = e;
    // API
    await fetch(`${webUrl}/api/notebooks/updatenotebook/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ notebookTitle, notebookCover }),
    })
    getNotebooks()
    toast.success('Bingo! Your Notebook Content Have Been Updated Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'light'
  });
  }

  // add bookmark Notebooks :
  const addbookmark = async (id) => {
    // API
    await fetch(`${webUrl}/api/notebooks/addbookmark/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
    })
    getNotebooks()
    toast.success('Bookmark Added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'light'
  });
  }

  // remove bookmark Notebooks :
  const removebookmark = async (id) => {
    // API
    await fetch(`${webUrl}/api/notebooks/removebookmark/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
    })
    getNotebooks()
    toast.warn('Bookmark Removed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'light'
  });
  }

  // Delete Notebooks :
  const deleteNotebooks = async (id) => {
    // API
    await fetch(`${webUrl}/api/notebooks/deletenotebook/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
    })
    getNotebooks()
    toast.warn('Notebook Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'light'
  });
  }

  const [credentials, setCredentials] = useState({})


  // credentials, setCredentials,googleLogin, setGoogleLogin,isEmpty, setIsEmpty,countid, setId,loading, Setloading

//  esetdata, edata, setnotebookCover, notebookCover, notebookTitle, setnotebookTitle

  return (
    <NotebookContext.Provider value={{ notebooks, setNotebooks, getNotebooks,addNotebooks, updateNotebooks,eData, setEData, deleteNotebooks,setnotebookCover, notebookCover, notebookTitle, setnotebookTitle,id, setId,addbookmark,removebookmark,getBookmarkedNotebooks,loading, setLoading,credentials, setCredentials }}>
      {props.children}
    </NotebookContext.Provider>
  )
}

export default NotebookState;
