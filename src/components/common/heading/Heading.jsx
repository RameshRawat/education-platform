import React from "react"

const Heading = ({ subtitle, title,frompage='',from='' }) => {
  return (
    <>
      <div id='heading' className={from==="home-banner"?" home-banner":""}>
        <h3 style={frompage==='collegeDetail'?{color:"white"}:{}}>{subtitle} </h3>
        <h1 style={frompage==='collegeDetail'?{color:"white"}:{ color:"#333333"}} className={from==="home-banner"?"heading-resp-font home-banner-text":"heading-resp-font"}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
