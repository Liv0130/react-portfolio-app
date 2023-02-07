import React from "react";
import CollectionCard from "./CollectionCard";
import "./collection.css";
import collectionCardData from "../data/collectionCardData";

export default function Collection() {
  return (
    <>
      <div className="collection">
        <div className="collection-intro">
          <h1 id="collection-title">Collection</h1>
          <h2 id="collection-subtitle">
            Until I can understand how it works behind the scenes
          </h2>
          <p className="explanation">
            I started to study coding in Korea from 2021 June. The first course
            was about basic web development with HTML, CSS and JavaScript. After
            that, I took other courses following a frontend roadmap including
            React.js, Vue.js and Node.js which are based on JavaScript. This
            collection will be a great example to show how I have constantly
            worked myself to achieve my goal to be a frontend developer!
          </p>
          <div className="span-holder">
            <span>Click and check the details of each app!</span>
          </div>
        </div>
        <div className="collectioncards-area">
          <div className="collection-cards">
            {collectionCardData.map((data, index) => {
              return <CollectionCard key={index} cData={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
