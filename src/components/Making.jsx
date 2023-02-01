import React from "react";
import "./making.css";
import MakingCard from "./MakingCard";
import modalData from "../data/modalData";

export default function Making() {
  return (
    <div id="making">
      <h1 id="making-head">Behind the Scenes</h1>
      <div id="making-subhead">
        How I worked for this website!
        <br />
        Please check my hard work!
        <h2>Click each step and check the details😎</h2>
      </div>
      {/* <!-- timeline code --> */}
      <div className="timeline">
        <div className="outer">
          {/* <MakingCard data={cardData} /> */}
          {modalData.map((data, index) => {
            return <MakingCard key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
