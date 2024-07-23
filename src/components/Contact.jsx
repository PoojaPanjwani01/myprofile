import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h2>CONTACT ME</h2>
        <div
          className="contact-icon"
          // data-aos="zoom-in-up"
          // data-aos-duration="1000"
        >

          <a href="https://www.linkedin.com/in/pooja-panjwani-213925263/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
         
          <a href="https://github.com/PoojaPanjwani01" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:poojapanjwani210@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;