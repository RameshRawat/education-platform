import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
// import Testimonal from "./testimonal/Testimonal"
import { useNavigate } from "react-router-dom"

const Home = () => {


  const navigate=useNavigate()
  return (
    <>
      <Hero from="home-banner" >
      </Hero>

      <div className='buttons primary-btn1'>
              <button className='primary-btns' style={{cursor:"pointer"}} onClick={()=>navigate('/courses')}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                FIND COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
      <AboutCard />
      <HAbout />
      {/* <Testimonal /> */}
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
