import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./modal.css";

export default function Modal({ setShowModal, data }) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h1>{data.step}</h1>
        <div className="modal-container">
          <div className="modal-image">
            {/* <img src={data.img} alt={data.alt} className="modal-img" /> */}
            {data.img.map((i) => {
              return <img src={i} alt={data.alt} className="modal-img" />;
            })}
          </div>
          <p className="modal-detail">{data.detail}</p>
        </div>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
