import React, { useEffect } from "react";
import "./index.css";
import { SevenSegmentDisplay } from "./SevenSegmentDisplay";

export const DigitalClock = () => {
  const dig = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const encode = [
    [1, 2, 3, 5, 6, 7],
    [3, 6],
    [1, 3, 4, 5, 7],
    [1, 3, 4, 6, 7],
    [2, 4, 3, 6],
    [1, 2, 4, 6, 7],
    [1, 2, 5, 4, 6, 7],
    [1, 3, 6],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 6, 7],
  ];
  const classes = ["hhone-", "hhtwo-", "mmone-", "mmtwo-", "ssone-", "sstwo-"];
  const fillOn = "white";
  const fillOff = "black";
  const filterOn = "drop-shadow(0 0 2px rgb(0,0,0,0)";
  const filterOff = "drop-shadow(0 0 2px rgb(0,0,0,0)";
  let s;

  const toggle = (timeStamp, reset) => {
    for (let i = 0; i < timeStamp.length; i++) {
      for (let j = 0; j < encode[timeStamp[i]].length; j++) {
        s = `.${classes[i]}${dig[encode[timeStamp[i]][j]]}`;
        document
          .querySelector(s)
          .style.setProperty("fill", reset ? fillOff : fillOn);
        document
          .querySelector(s)
          .style.setProperty("filter", reset ? filterOff : filterOn);
      }
    }
  };

  useEffect(() => {
    function main() {
      const time = new Date();
      const hh = time.getHours();
      const mm = time.getMinutes();
      const ss = time.getSeconds();
      const h1 = Math.floor(hh / 10);
      const h2 = Math.floor(hh % 10);
      const m1 = Math.floor(mm / 10);
      const m2 = mm % 10;
      const s1 = Math.floor(ss / 10);
      const s2 = Math.floor(ss % 10);

      toggle([8, 8, 8, 8, 8, 8], true);
      toggle([h1, h2, m1, m2, s1, s2], false);
    }
    main();
    // call main every 1 sec
    const interval = setInterval(() => main(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="digital">
      {classes.map((cls, i) => (
        <span key={i}>
          <SevenSegmentDisplay customClass={cls} />
          {i % 2 !== 0 && i < classes.length - 1 && (
            <span className="colon-container">
              <p className="colon">:</p>
            </span>
          )}
        </span>
      ))}
    </div>
  );
};
