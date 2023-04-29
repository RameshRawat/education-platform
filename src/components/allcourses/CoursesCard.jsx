import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { useNavigate } from "react-router-dom"

const CoursesCard = () => {
  const navigate=useNavigate()
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val?.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val?.collegeName}</h1>
               
                  <div className='details'>
                    {val?.describe}
                  </div>
                </div>
              </div>
              <div className='University'>
                <h3>
                  {val?.University} / {val.location}
                </h3>
              </div>
              <button className='outline-btn' onClick={()=>navigate(`/college/${val?.id}`)}>VISIT NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
