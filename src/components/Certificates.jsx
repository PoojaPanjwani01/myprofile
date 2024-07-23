import React from "react";
import certificates from "./data/certificates.json"; 

const Certificates = () => {
  return (
    <>
      <div className="container certificates" id = "certificates">
        <h3>CERTIFICATES</h3>
        {certificates.map((certificate) => {
          return (
            <div
              key={certificate.id}
              className="certificate-items"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="left">
                <h2>{certificate.title}</h2>
                <p style={{ color: "lavender" }}>{certificate.description}</p>
              </div>
              <div className="right">
                <a href={certificate.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Certificates;
