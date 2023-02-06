import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css";
import "./makingCard.css";

export default function MakingCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  // 여기서 data를 array로 변환해주기(데이터 출력위해서)
  const openModal = () => {
    setShowModal(true);
  };
  // 여기서 모달 안에 들어갈 데이터들을 props로 다시 줘야함
  // 즉, Making->MakingCard->Modal순으로 계속 데이터를 주고 있음
  return (
    <div className="card">
      <div className="info">
        <button onClick={openModal} className="making-order">
          <p>{data.name}</p>
        </button>
        <div className="modal-area">
          {showModal ? <Modal setShowModal={setShowModal} data={data} /> : null}
        </div>
      </div>
    </div>
  );
}
