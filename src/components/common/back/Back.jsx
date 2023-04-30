import { green } from "@mui/material/colors"
import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
      {title!=="CollegeDetail" && <> <h2 className="mtClass" >Home  {location.pathname.split("/")[1]!=="courses"?location.pathname.split("/")[1]:"Colleges"}</h2>
        <h1 className="ramesh" style={{fontSize:"60px", marginTop:"50px"}}>{title}</h1></>}
      </section>
     {title!=="CollegeDetail" &&<div className='margin'></div>}
    </>
  )
}

export default Back
