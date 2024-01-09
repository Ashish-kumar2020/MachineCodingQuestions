import React, { useState } from "react";
import "./Accordian.css"; // Import the CSS file for styling

const Accordion = () => {
  const [showAccordion, setShowAccordion] = useState(true);

  const modal = (modalIndex, modalContent) => {
    <div className="accordion-container">
      <div className="accordion-header">
        <button className="accordion-toggle" onClick={() => {}}>
          {showAccordion === modalIndex ? "Hide" : "Show"}
        </button>
      </div>
      {showAccordion === modalIndex && (
        <div className="accordion-content">
          <span>{modalContent}</span>
        </div>
      )}
    </div>;
  };

  return (
    <>
      {modal(1, "Hi this is modal 1")}
      {modal(2, "hi this is modal 2")}
      {modal(3, "Hi this is modal 3")}
    </>
  );
};

export default Accordion;
