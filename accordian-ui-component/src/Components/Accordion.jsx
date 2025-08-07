import { useState } from "react";
import "./Accordion.css";

const data = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It helps you build UIs using components.",
  },
  {
    question: "What is useState?",
    answer:
      "useState is a React Hook that lets you add state to functional components.",
  },
  {
    question: "Why use an Accordion?",
    answer:
      "Accordions help organize content and improve UX by hiding unnecessary info until needed.",
  },
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordian = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  document.body.className = "dark";
  return (
    <div className="accordion-container">
      <h1 className="faq-heading">FAQs</h1>
      {data.map((item, index) => (
        <div
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div
            className="accordion-title"
            onClick={() => toggleAccordian(index)}
          >
            <h3>{item.question}</h3>
            <span>{activeIndex === index ? "➖" : "➕"}</span>
          </div>
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? "200px" : "0px",
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Accordion;
