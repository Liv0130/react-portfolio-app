import React from "react";
import { Link } from "react-router-dom";
import "./collectionCard.css";

export default function CollectionCard({ cData }) {
  const icons = cData.icon;
  return (
    <>
      <div className="card-item">
        <Link to={`/collection/details/${cData.id}`}>
          <div className="work-preview">
            <img
              className="collection-preview"
              src={cData.image}
              alt={cData.imageAlt}
            />
          </div>
          <p className="item-title">{cData.name}</p>
          <p className="item-summary">{cData.summary}</p>
          <div id="item-logo">
            {icons.map((icon, index) => {
              return <img key={index} src={icon} alt={cData.iconAlt} />;
            })}
          </div>
        </Link>
      </div>
    </>
  );
}
