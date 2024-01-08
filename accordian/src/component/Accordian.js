import React, { useState } from "react";
import "./Accordian.css"; // Import the CSS file for styling

const Accordion = () => {
  const [showAccordion1, setShowAccordion1] = useState(true);
  const [showAccordion2, setShowAccordion2] = useState(false);
  const [showAccordion3, setShowAccordion3] = useState(false);
  return (
    <>
      <div className="accordion-container">
        <div className="accordion-header">
          <button
            className="accordion-toggle"
            onClick={() => {
              setShowAccordion1(!showAccordion1);
              setShowAccordion2(false);
              setShowAccordion3(false);
            }}
          >
            {showAccordion1 ? "Hide" : "Show"}
          </button>
        </div>
        {showAccordion1 && (
          <div className="accordion-content">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
              repudiandae veritatis pariatur provident laboriosam nemo rem
              consequatur. Distinctio, rerum dolore! Ducimus inventore assumenda
              delectus incidunt voluptatum ratione unde ea exercitationem
              deserunt, earum ipsum quod nostrum, perferendis explicabo
              corporis, cum debitis rem dolore. Et consequuntur quidem doloribus
              obcaecati, deleniti impedit porro fugit placeat exercitationem
              illo atque neque sed dolorem. Exercitationem quos quod deserunt
              consectetur!
            </span>
          </div>
        )}
      </div>

      <div className="accordion-container">
        <div className="accordion-header">
          <button
            className="accordion-toggle"
            onClick={() => {
              setShowAccordion2(!showAccordion2);
              setShowAccordion1(false);
              setShowAccordion3(false);
            }}
          >
            {showAccordion2 ? "Hide" : "Show"}
          </button>
        </div>
        {showAccordion2 && (
          <div className="accordion-content">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
              repudiandae veritatis pariatur provident laboriosam nemo rem
              consequatur. Distinctio, rerum dolore! Ducimus inventore assumenda
              delectus incidunt voluptatum ratione unde ea exercitationem
              deserunt, earum ipsum quod nostrum, perferendis explicabo
              corporis, cum debitis rem dolore. Et consequuntur quidem doloribus
              obcaecati, deleniti impedit porro fugit placeat exercitationem
              illo atque neque sed dolorem. Exercitationem quos quod deserunt
              consectetur!
            </span>
          </div>
        )}
      </div>

      <div className="accordion-container">
        <div className="accordion-header">
          <button
            className="accordion-toggle"
            onClick={() => {
              setShowAccordion3(!showAccordion3);
              setShowAccordion1(false);
              setShowAccordion2(false);
            }}
          >
            {showAccordion3 ? "Hide" : "Show"}
          </button>
        </div>
        {showAccordion3 && (
          <div className="accordion-content">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
              repudiandae veritatis pariatur provident laboriosam nemo rem
              consequatur. Distinctio, rerum dolore! Ducimus inventore assumenda
              delectus incidunt voluptatum ratione unde ea exercitationem
              deserunt, earum ipsum quod nostrum, perferendis explicabo
              corporis, cum debitis rem dolore. Et consequuntur quidem doloribus
              obcaecati, deleniti impedit porro fugit placeat exercitationem
              illo atque neque sed dolorem. Exercitationem quos quod deserunt
              consectetur!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
