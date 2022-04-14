import React from 'react'
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
    // value="" onKeyDown={()=>{return false}} 

    // CODE FOOR IMG UPLOADER
    const imageForm = document.querySelector("#imageForm")
    const imageInput = document.querySelector("#imageInput")

    const handelClick = async (event) => {
        event.preventDefault()
        const file = imageInput.files[0]

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

        // post requst to my server to store any extra data


        const img = document.createElement("img")
        img.src = imageUrl
        document.body.appendChild(img)
    }
    // END


    return (
        <>
            <div data-bs-toggle="modal" data-bs-target="#imgUploaderModal"  className={`coverImg text-center imgUploderBox d-center`}>
                <label style={{ paddingTop: "5px" }} className="c-pointer" >Custom cover</label>
            </div>

                <div class="modal fade" id="imgUploaderModal" style={{cursorEvent:"none",zIndex:"1030"}} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" style={{zIndex:"1090"}}>
                        <form class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="imageForm" className="text-center">
                                    <input placeholder="img" id="imageInput"  type="file" accept="image/*" />
                                    {/* <button onClick={(e) => { handelClick(e) }} type="submit">Upload</button> */}
                                </form>
                            </div>
                            <div class="modal-footer">
                                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                <button onClick={(e) => { handelClick(e) }} type="submit" class="btn btn-primary">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>


            {
                notebookCoverUrl.map((e) => {
                    return (<NotebookCover url={e} notebookCover={notebookCover} setnotebookCover={setnotebookCover} />)
                })
            }
        </>

        //   <div className={`coverImg ${notebookCover === notebookCoverUrl[0] ? "addAfter" : ""}`} onClick={() => { setnotebookCover(notebookCoverUrl[0]) }} style={{ background: `url(${notebookCoverUrl[0]})` }}></div>

    )
}
export default CoverImgs;
