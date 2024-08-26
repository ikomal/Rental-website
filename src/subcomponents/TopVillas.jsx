import React from "react";
import { villas } from "../villas";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
const TopVillas = () => {
  return (
    <>
      <section id="topVillas">
        <h1 className="h1">TOP PICK VILLAS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem
          illum animi aliquid quidem maxime beatae nobis obcaecati aut.animi aliquid quidem maxime beatae nobis obcaecati aut Expedita
          rem minus ipsa itaque minima!
        </p>
        <div className="villasContainer">
          {villas.slice(0, 3).map((element) => {
            return (
              <Link className="card border rounded-md" to={`/villa/${element.id}`} key={element.id}>
                <img src={element.image} alt="" />
                <div className="location_text">
                    <span>{element.location}</span>
                    <span><RxDot/></span>
                    <span>{element.category}</span>
                </div>
                <div className="title_text">
                    <span>{element.name}</span>
                </div>
                <div className="specifications">
                    <div className="spec">
                        <IoIosPeople/>
                        <span>{element.guests}</span>
                        Guests
                    </div>
                    <div className="spec">
                        <FaBed/>
                        <span>{element.bedrooms}</span>
                        Bedrooms
                    </div>
                    <div className="spec">
                        <FaBath/>
                        <span>{element.bathrooms}</span>
                        Bathrooms
                    </div>
                    <div className="spec">
                        <BiArea/>
                        <span>{element.guests}</span>
                        Area
                    </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopVillas;
