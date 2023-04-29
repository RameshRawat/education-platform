import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import { useNavigate } from "react-router-dom"

const HAbout = () => {
  const navigate=useNavigate()
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='Colleges Information' title=' Provide detailed information about the Colleges' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2 top-resp'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      {/* <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div> */}
                      <div className='details'>
                        {val?.describe}
                      </div>
                    </div>
                  </div>
                  {/* <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div> */}
                  <button className='outline-btn' onClick={()=>navigate(`/college/${val?.id}`)}>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
