import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";

const Singlevilla = () => {
  const { id } = useParams();
  const numericid = Number(id);
  const filtervilla = villas.filter((villas) => villas.id === numericid)[0];
  return (
    <section id="singleVilla" className="page">
      <div className="container">
      <h3 className="h3">{filtervilla.name}</h3>
      <div className="images">
        <div className="villaImg">
          <img src={filtervilla.image} alt="singlevilla img" />
        </div>
        <div className="otherImgs">
          <div>
            <img src="/landing.jpg" alt="" />
            <img src="/people.jpg" alt="" />
          </div>
          <div>
            <img src="/people2.jpg" alt="" />
            <img src="/villa10.jpg" alt="" />
          </div>
        </div>
      </div>
      <h4 className="h4">{filtervilla.location}</h4>
      <p>
        {filtervilla.bathrooms} Bathrooms / {filtervilla.bedrooms} Bedrooms /{" "}
        {filtervilla.guests} Guests / {filtervilla.squareMeter} Area
      </p>
      <div className="checkin_out">
        <h5 className="">
          Check In <span>9:00 AM</span>
        </h5>
        <h5 className="">
          Check Out <span>11:00 PM</span>
        </h5>
      </div>
      <div className="location">
        <h4 className="h4">LOACTION</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.621669808245!2d75.83810667489077!3d26.78832716542593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9d37cf234d5%3A0xa586294f84941bf8!2sSolanki%20farms%20%26%20Villa%20with%20gardens!5e0!3m2!1sen!2sin!4v1724603733373!5m2!1sen!2sin"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
      </div>
    </section>
  );
};

export default Singlevilla;
