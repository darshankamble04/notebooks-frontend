import React, { useEffect, useRef, useState } from 'react'
import NotebookCover from '../screens/myNotebooks/components/NotebookCover'

export const notebookCoverUrl = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCbawr_3aVyp4oPkmLkPXuPolV8idSbjiCg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGyeJ286i4qFaY3BXhUXBSPcIsUON15zUoQ&usqp=CAU",
    "https://c0.wallpaperflare.com/preview/76/943/601/4k-wallpaper-architecture-background-black.jpg",
    "https://c4.wallpaperflare.com/wallpaper/863/982/537/digital-art-pattern-blue-background-minimalism-wallpaper-thumb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeUYfHbBGy6e02BXlEJvoLKYLsvpqUk7bCA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeFtpMqmxAp-XS0sLdeVxkZilZ-YqGTu2oQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYMiwz9oy-VF2G7PkRiPoYIvsH_xq-ajXYJT-VSbSRzwa1WTD5GUygOqgEONH4VzbchU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz-XfKhmur7WFQtqcZJhv6p7nXI3Gqocc4g&usqp=CAU",
    "https://c4.wallpaperflare.com/wallpaper/348/135/723/simple-background-digital-art-minimalism-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/347/341/72/dictionaries-black-minimalism-quote-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/413/925/249/minimalism-abstract-pattern-digital-art-wallpaper-thumb.jpg",
    "https://wallpaperbat.com/img/4306-iron-man-mask-desktop-wallpaper-62758-1920x1080px.jpg",
    "https://wallpaperbat.com/img/580964-avengers-minimal-logo-iphone-hd-4k-wallpaper-data-src-avengers-logo-wallpaper-hd-for-mobile-hd-wallpaper-background-download.jpg",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/pgDhvxJYAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "https://wallpaperaccess.com/full/1467836.jpg",
    "https://wallpaperaccess.com/full/1756508.jpg",
    "https://wallpaperaccess.com/full/1756374.jpg",
    "https://drive.google.com/uc?id=1shZbofawsZnOQxZboA1YleSkMvi_TXdP",
]


const CoverImgs = (props) => {
    const { setnotebookCover, notebookCover } = props
    const [isImgUpoloaded, setIsImgUpoloaded] = useState(1)
    const [imgUrl, SetImgUrl] = useState("")
    const initialUrls = []
    const [ncus, setNcus] = useState(initialUrls)
    // value="" onKeyDown={()=>{return false}} 
    const autoClick = useRef(null)
    // CODE FOOR IMG UPLOADER
    const imageForm = document.querySelector("#imageForm")
    const imageInput = document.querySelector("#imageInput")

    const handelClick = async (event) => {
        event.preventDefault()
        const file = imageInput.files[0]
        console.log(file)
        
            // get secure url from our server
            const { url } = await fetch("http://localhost:5000/s3Url").then(res => res.json())
            console.log(url)

            // post the image direclty to the s3 bucket
            await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: file
            })

            const imageUrl = url.split('?')[0]
            console.log(imageUrl)
            SetImgUrl(imageUrl)

            console.log(imgUrl)
            setIsImgUpoloaded(1)
            addNcus(imgUrl);
            // post requst to my server to store any extra data

       
    }
    // END


    const getNcus = async () => {
        try {
            //   setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_WebUrl}/api/auth/getncu`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("token")
                },
            })
            const json = await response.json()
            setNcus(json.notebookcoverurl)
            console.log(json)
            //   setLoading(false)

        } catch (error) {
            console.error(error)
        }
    }

    const addNcus = async (e) => {
        try {
            //   setLoading(true)
            await fetch(`${process.env.REACT_APP_WebUrl}/api/auth/addncu`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ notebookcoverurl: e }),
            })
            getNcus();
            //   const json = await response.json()
            //   setNcus(json)
            //   setLoading(false)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getNcus()

    }, [])



    return (
        <>
        {/*  style={{position:"absolute",top:"-30px"}}  */}
            <form onSubmit={(e) => { handelClick(e) }} className={`coverImg text-center imgUploderBox d-center`}>
                {/* <span onClick={() => { autoClick.current.click() }} style={{ paddingTop: "5px" }} className="c-pointer" >Custom cover</span> */}

                <input ref={autoClick} onChange={(e) => { setIsImgUpoloaded(0); console.log(e) }} id="imageInput" type="file" accept="image/*" />

                <button disabled={isImgUpoloaded} type="submit" className='imgUploadBtn addNotebookbtn'>Upload</button>
            </form>

            {/* {imgUrl!=="" && <NotebookCover url={imgUrl} notebookCover={notebookCover} setnotebookCover={setnotebookCover} />} */}
            <img src={imgUrl} alt="" />

            {
                ncus !== undefined && ncus.map((e) => {
                    return (<NotebookCover url={e} notebookCover={notebookCover} setnotebookCover={setnotebookCover} />)
                })
            }

            {
                notebookCoverUrl.map((e) => {
                    return (<NotebookCover url={e} notebookCover={notebookCover} setnotebookCover={setnotebookCover} />)
                })
            }

            {/* <div className={`coverImg ${notebookCover === notebookCoverUrl[0] ? "addAfter" : ""}`} onClick={() => { setnotebookCover(notebookCoverUrl[0]) }} style={{ background: `url(${notebookCoverUrl[0]})` }}></div> */}
        </>


    )
}
export default CoverImgs;