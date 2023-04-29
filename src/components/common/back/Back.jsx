import { green } from "@mui/material/colors"
import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
      {title!=="CollegeDetail" && <> <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1 className="ramesh">{title}</h1></>}
      </section>
     {title!=="CollegeDetail" &&<div className='margin'></div>}
    </>
  )
}

export default Back
