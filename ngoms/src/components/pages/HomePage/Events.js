import React, { useState, useEffect } from "react";
import "./CSS/Events.css";

export const EventsItem = ({ children, width }) => {
  return (
    <div className="events-items" style={{ width: width }}>
      {children}
    </div>
  );
};
const Events = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div id='event_section' style={{ padding: "50px", backgroundColor: "#1C2237" }}>
      <div className="EventDIV">
        <p
          className="EventsHeading"
          style={{
            color: "red",
            fontFamily: "'PT Sans', sans-serif",
            textAlign: "left",
            padding: "15px",
            lineHeight: "16px",
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "1.5px",
          }}
        >
          {" "}
          Events{" "}
        </p>
        <p
          className="EventsHeading"
          style={{
            color: "white",
            maxWidth: "440px",
            fontFamily: "'PT Sans', sans-serif",
            textAlign: "left",
            padding: "15px",
            lineHeight: "24px",
            fontSize: "18px",
            fontWeight: "lighter",
            textTransform: "none",
          }}
        >
          {" "}
          description{" "}
        </p>
        <div className="events">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div className="indicators">
          <button
            className="prev-button"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            ‹
          </button>
          <button
            className="next-button"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
