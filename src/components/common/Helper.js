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
            <div className={`coverImg ${notebookCover===notebookCoverUrl[0]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[0])}} style={{ background: `url(${notebookCoverUrl[0]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[1]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[1])}} style={{ background: `url(${notebookCoverUrl[1]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[2]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[2])}} style={{ background: `url(${notebookCoverUrl[2]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[3]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[3])}} style={{ background: `url(${notebookCoverUrl[3]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[4]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[4])}} style={{ background: `url(${notebookCoverUrl[4]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[5]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[5])}} style={{ background: `url(${notebookCoverUrl[5]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[6]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[6])}} style={{ background: `url(${notebookCoverUrl[6]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[7]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[7])}} style={{ background: `url(${notebookCoverUrl[7]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[8]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[8])}} style={{ background: `url(${notebookCoverUrl[8]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[9]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[9])}} style={{ background: `url(${notebookCoverUrl[9]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[10]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[10])}} style={{ background: `url(${notebookCoverUrl[10]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[11]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[11])}} style={{ background: `url(${notebookCoverUrl[11]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[13]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[13])}} style={{ background: `url(${notebookCoverUrl[13]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[14]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[14])}} style={{ background: `url(${notebookCoverUrl[14]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[15]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[15])}} style={{ background: `url(${notebookCoverUrl[15]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[16]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[16])}} style={{ background: `url(${notebookCoverUrl[16]})` }}></div>
            <div className={`coverImg ${notebookCover===notebookCoverUrl[12]?"addAfter":""}`} onClick={()=>{setnotebookCover(notebookCoverUrl[12])}} style={{ background: `url(${notebookCoverUrl[12]})` }}></div>
        </>
    )
}
export default CoverImgs;
