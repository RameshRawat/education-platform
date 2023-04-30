import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../common/heading/Heading";
import { coursesCard } from "../../dummydata";
import Header from "../common/header/Header";
import Hero from "../home/hero/Hero";
import Back from "../common/back/Back";
import { LineWeight } from "@mui/icons-material";

const CollegeDetail = () => {
  const [myDetail, setMydetail] = useState({});
  const router = useParams();
  const { id } = router;
  const ids = parseInt(id);
  //   console.log(id, "id");
  useEffect(() => {
    if (id) {
      setMydetail(coursesCard?.find((course) => course.id === ids));
    }
  }, [id]);
  myDetail && console.log("myDetail", myDetail);
  //   console.log("myDetail", coursesCard);
  //   const collegeName = "am";
  return (
    <>
      {/* <Hero /> */}
      {/* </Hero> */}
      <Back title="CollegeDetail" />
      <Heading
        subtitle="College Detail"
        title={myDetail?.collegeName}
        frompage="collegeDetail"
      />
      <section
        className="text-gray-600 body-font overflow-hidden "
        style={{ backgroundColor: "white" }}
      >
        <div className="px-5 py-24 mx-auto" style={{ marginLeft: "10px" }}>
          <div>
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                style={{ padding: "20px 0px 20px 0px" }}
                className="lg:w-1/2 w-[200px] lg:h-auto h-64 object-cover object-center rounded"
                src={myDetail?.image}
                width="100%"
              />
              <div
                className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                style={{ padding: "20px 0px 0px 20px" }}
              >
                <h1 className="text-sm title-font text-gray-500 tracking-widest">
                  {myDetail?.university}
                </h1>
                <h3 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {myDetail?.program}
                </h3>

                <div className="collegedetails1">
                  <p>{myDetail?.describe}</p>
                </div>
              </div>
            </div>
            <section>
            {myDetail?.syllabus?.map((items, i) => {
                  return (
                    <>
              
                {/* className="rootsub"
                key={i}
                style={i%2===0?{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "0px 20px 20px 20px",
                  fontweight:"bold",
                  backgroundColor:"greenyellow"
                }:
                { display: "flex",
                justifyContent: "space-around",
                padding: "0px 20px 20px 20px",}}
              > */}
<div className="parentmain">
               <div className="mainhead-syll01">
               {items?.syllabusName}
               </div>

              <div className="mainhead-syll">
               {items?.syllabushead}
               </div>
               </div>

               
              <div className="subjectname0">
                      <div className="leftsub">{items?.semester}
                      </div>

                      <div className="rightsub">
                        {  console.log('item',items?.subjects)}
                        <ul>
                         {
                         items?.subject?.map((item, i) => {
                          console.log('item',item)
                          return(
                            <>
                             <li> {item}</li>
                            </>
                          )
                         })
                        }
                        </ul>
                     
                      </div>
                      </div>
                    </>
                  );
                })}
            </section>
          </div>
        </div>
        <div className="locationText">
        <h2 style ={{display:"flex", justifyContent:"center", background:"#a647e1", color:"white"}}>
            {myDetail.location}</h2></div>

        <div className="moredetailspage">
            <a href="https://www.collegenote.net/courses/TU/CSIT/1/" target="_blank">CLICK HERE FOR MORE DETAILS</a>
            </div>
        
      </section>
    </>
  );
};

export default CollegeDetail;
