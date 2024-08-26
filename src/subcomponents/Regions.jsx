import React from "react";

const Regions = () => {
  return (
    <>
      <section id="regions">
        <h1 className="h1">OUR REGIONS</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis culpa reiciendis soluta architecto tempora, enim deserunt itaque praesentium. Sunt, quos?</p>
        <div className="region_container">
            <div className="card">
                <img src="/region1.jpg" alt="mountains" />
                <h2 className="h2">Mountains</h2>
                <p><span>90</span>Properties</p>
            </div>
            <div className="card">
                <img src="/region2.jpg" alt="coastline" />
                <h2 className="h2">Coastlines</h2>
                <p><span>50</span>Properties</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Regions;
