import React from 'react'

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


const CoverImgs=(props)=> {
    const { setnotebookCover,notebookCover } = props
    // value="" onKeyDown={()=>{return false}} 
    return (
        <>
            <input className={`coverImg ${notebookCover===0?"addAfter":""}`} onClick={()=>{setnotebookCover(0)}} style={{ background: `url(${notebookCoverUrl[0]})` }}></input>
            <input className={`coverImg ${notebookCover===1?"addAfter":""}`} onClick={()=>{setnotebookCover(1)}} style={{ background: `url(${notebookCoverUrl[1]})` }}></input>
            <input className={`coverImg ${notebookCover===2?"addAfter":""}`} onClick={()=>{setnotebookCover(2)}} style={{ background: `url(${notebookCoverUrl[2]})` }}></input>
            <input className={`coverImg ${notebookCover===3?"addAfter":""}`} onClick={()=>{setnotebookCover(3)}} style={{ background: `url(${notebookCoverUrl[3]})` }}></input>
            <input className={`coverImg ${notebookCover===4?"addAfter":""}`} onClick={()=>{setnotebookCover(4)}} style={{ background: `url(${notebookCoverUrl[4]})` }}></input>
            <input className={`coverImg ${notebookCover===5?"addAfter":""}`} onClick={()=>{setnotebookCover(5)}} style={{ background: `url(${notebookCoverUrl[5]})` }}></input>
            <input className={`coverImg ${notebookCover===6?"addAfter":""}`} onClick={()=>{setnotebookCover(6)}} style={{ background: `url(${notebookCoverUrl[6]})` }}></input>
            <input className={`coverImg ${notebookCover===7?"addAfter":""}`} onClick={()=>{setnotebookCover(7)}} style={{ background: `url(${notebookCoverUrl[7]})` }}></input>
            <input className={`coverImg ${notebookCover===8?"addAfter":""}`} onClick={()=>{setnotebookCover(8)}} style={{ background: `url(${notebookCoverUrl[8]})` }}></input>
            <input className={`coverImg ${notebookCover===9?"addAfter":""}`} onClick={()=>{setnotebookCover(9)}} style={{ background: `url(${notebookCoverUrl[9]})` }}></input>
            <input className={`coverImg ${notebookCover===10?"addAfter":""}`} onClick={()=>{setnotebookCover(10)}} style={{ background: `url(${notebookCoverUrl[10]})` }}></input>
            <input className={`coverImg ${notebookCover===11?"addAfter":""}`} onClick={()=>{setnotebookCover(11)}} style={{ background: `url(${notebookCoverUrl[11]})` }}></input>
            <input className={`coverImg ${notebookCover===13?"addAfter":""}`} onClick={()=>{setnotebookCover(13)}} style={{ background: `url(${notebookCoverUrl[13]})` }}></input>
            <input className={`coverImg ${notebookCover===14?"addAfter":""}`} onClick={()=>{setnotebookCover(14)}} style={{ background: `url(${notebookCoverUrl[14]})` }}></input>
            <input className={`coverImg ${notebookCover===15?"addAfter":""}`} onClick={()=>{setnotebookCover(15)}} style={{ background: `url(${notebookCoverUrl[15]})` }}></input>
            <input className={`coverImg ${notebookCover===16?"addAfter":""}`} onClick={()=>{setnotebookCover(16)}} style={{ background: `url(${notebookCoverUrl[16]})` }}></input>
            <input className={`coverImg ${notebookCover===12?"addAfter":""}`} onClick={()=>{setnotebookCover(12)}} style={{ background: `url(${notebookCoverUrl[12]})` }}></input>
        </>
    )
}
export default CoverImgs;
