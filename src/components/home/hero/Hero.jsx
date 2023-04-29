import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = ({from=''}) => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO VRIT SHIKSHYA' title=' Find your dream Colleges with our personalized recommendations' from={from} />
            <p>We can save your time and effort by presenting them with relevant <br></br>options that are tailored to their needs and preferences.<br></br> They can also help you discover new opportunities</p>
          
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
