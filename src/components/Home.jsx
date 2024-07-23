import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Pooja_Resume.pdf';
import profile from './data/profile.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Welcome to My Profile',
        'Myself Pooja Panjwani',
        'Explore my background in engineering and my journey into web development',
        'Explore my latest projects, showcasing my skills in action'
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id = "home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef} className="typed-text"></h1>
          <a href={pdf} download="Pooja_resume.pdf" className="btn btn-outline-warning">
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${profile.imgSrc}`} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
