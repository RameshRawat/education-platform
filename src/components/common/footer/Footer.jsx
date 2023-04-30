import React, { useState } from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [validmsg, setValidmsg] = useState("");
  const [myvalue, setMyValue] = useState("");
  const notify = () => toast("Thank you for Subscribe to Our Newsletter !");
  console.log("validmess", validmsg);
  const handleClickSub = (myvalue) => {
    console.log("myvalue inside", myvalue);
    // e.preventDefault()
    // if (myvalue.length > 0) {
    //   notify();
    //   setValidmsg("");
    //   setMyValue("");
    // } else {
    //   setValidmsg(<span style={{ color: "red" }}>Please enter the email</span>);
    // }

    if (myvalue.length<1) {
      setValidmsg('Email address is required');
    } else if (!/\S+@\S+\.\S+/.test(myvalue)) {
      setValidmsg('Invalid email address');
    } else {
      // handle valid email
      console.log('Email submitted:', myvalue);
      notify();
      setValidmsg("");
      setMyValue("");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row resrow1">
            <h1>Subscribe to Our Newsletter</h1>
          </div>
          <div className="right row" style={{position:"relative"}}>
            <input
              type="email"
              value={myvalue}
              onChange={(e) => setMyValue(e.target.value)}
              placeholder="Enter email address"
            />
            <i
              className="fa fa-paper-plane"
              style={{cursor:"pointer"}}
              onClick={() => {
                handleClickSub(myvalue);
               
              }}
            ></i>
       
          <span style={{color:"red",position:"absolute",top:"50px"}}>{validmsg && validmsg}</span>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding custom-footer">
          <div className="box logo">
            <h1>VRIT SHIKSHYA</h1>
            <span>College Recommendation Platform</span>
            <p>
              We work hard to get you the right path. Connect with us right now
              to take the first step toward excellence.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Info</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Kathmandu, Nepal
              </li>
              <li>
                {/* <i className='fa fa-email-alt'></i> */}
                <i className="fas fa-envelope" style={{ color: "#1eb2a6" }} />
                vrit46@gmail.com
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
