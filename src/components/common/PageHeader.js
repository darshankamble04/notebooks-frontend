import React , {useState} from 'react'
import { useLocation, useNavigate } from 'react-router'
import '../../css/pageHeader.css'


function PageHeader(props) {
    const [arrowAnimation, setArrowAnimation] = useState("")
    const location = useLocation()
    const go  = useNavigate(null)
    const animateArrow = () => {

        setTimeout(() => {
            if(location.pathname === '/mynotebooks' || location.pathname === '/mdviewer'){
                go("/")
            }
            else{
                window.history.go(-1)
            }
        }, 700);
        setTimeout(() => {
            setArrowAnimation("")
        }, 600);
        setArrowAnimation(" arrow 600ms linear infinite reverse")
    }
    let pathname = window.location.pathname;
        pathname = pathname.split('/')
    return (
        <>
            <div className="d-flex align-items-center pageHeader">
                <div onClick={animateArrow} className="icon">
                    <div className="arrow" style={{ animation: `${arrowAnimation}` }}></div>
                </div>
                <h4 className="subHeading">{props.header}</h4>
                {location.pathname === '/mynotebooks' &&
                    <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"  className="material-icons addBtn">add</span>}
                 {location.pathname === `/mynotebooks/${pathname[2]}/${pathname[3]}` &&   
                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop3" className="material-icons addBtn">add</span>}

            </div>
            
        </>
    )
}

export default PageHeader
