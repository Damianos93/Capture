import React,{useEffect} from "react"
import {useLocation} from "react-router-dom"

function Scrolltop(props) {
    const {pathname}=useLocation()
    useEffect(() => {
        window.scroll({
            top:0,
            left:0
        })
    }, [pathname]) 
    return (
        <>
          
        </>
    )
}



export default Scrolltop
