import React, { useEffect } from "react";
import "./index.css";

export const AnalogClock = () => {
  useEffect(() => {
    const hr = document.querySelector(".hr");
    const min = document.querySelector(".min");
    const sec = document.querySelector(".sec");

    // Setting up the period of working
    setInterval(() => {
      // Extracting the current time
      let day = new Date();
      let hour = day.getHours();
      let minutes = day.getMinutes();
      let seconds = day.getSeconds();

      // rotation of different hands
      let h = 30 * hour + 0.5 * minutes;
      let m = 6 * minutes;
      let s = 6 * seconds;

      hr.style.transform = `translate(-50%,-75%) rotate(${h}deg)`;
      min.style.transform = `translate(-50%,-85%) rotate(${m}deg)`;
      sec.style.transform = `translate(-50%,-100%) rotate(${s}deg)`;
    });
  }, []);

  return (
    <div className="analog">
      <div className="hr" />
      <div className="min" />
      <div className="sec" />
    </div>
  );
};
