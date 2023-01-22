import React, { useEffect } from "react";
import "./index.css";

export const DigitalClock = () => {
  let dig = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let encode = {
    0: [1, 2, 3, 5, 6, 7],
    1: [3, 6],
    2: [1, 3, 4, 5, 7],
    3: [1, 3, 4, 6, 7],
    4: [2, 4, 3, 6],
    5: [1, 2, 4, 6, 7],
    6: [1, 2, 5, 4, 6, 7],
    7: [1, 3, 6],
    8: [1, 2, 3, 4, 5, 6, 7],
    9: [1, 2, 3, 4, 6, 7],
  };
  let s;
  const fillOn = "white";
  const fillOff = "black";
  const filterOn = "drop-shadow(0 0 2px rgb(0,0,0,0)";
  const filterOff = "drop-shadow(0 0 2px rgb(0,0,0,0)";

  const writing = (h1, h2, m1, m2, s1, s2) => {
    for (let i = 0; i < encode[h1].length; i++) {
      s = ".hhone-" + dig[encode[h1][i]];
      document.querySelector(s).style.setProperty("filter", filterOn);
      document.querySelector(s).style.setProperty("fill", fillOn);
    }

    for (let i = 0; i < encode[h2].length; i++) {
      s = ".hhtwo-" + dig[encode[h2][i]];
      document.querySelector(s).style.setProperty("fill", fillOn);
      document.querySelector(s).style.setProperty("filter", filterOn);
    }

    for (let i = 0; i < encode[m1].length; i++) {
      s = ".mmone-" + dig[encode[m1][i]];
      document.querySelector(s).style.setProperty("fill", fillOn);
      document.querySelector(s).style.setProperty("filter", filterOn);
    }

    for (let i = 0; i < encode[m2].length; i++) {
      s = ".mmtwo-" + dig[encode[m2][i]];
      document.querySelector(s).style.setProperty("fill", fillOn);
      document.querySelector(s).style.setProperty("filter", filterOn);
    }

    for (let i = 0; i < encode[s1].length; i++) {
      s = ".ssone-" + dig[encode[s1][i]];
      document.querySelector(s).style.setProperty("fill", fillOn);
      document.querySelector(s).style.setProperty("filter", filterOn);
    }

    for (let i = 0; i < encode[s2].length; i++) {
      s = ".sstwo-" + dig[encode[s2][i]];
      document.querySelector(s).style.setProperty("fill", fillOn);
      document.querySelector(s).style.setProperty("filter", filterOn);
    }
  };

  const off = (h1, h2, m1, m2, s1, s2) => {
    for (let i = 0; i < encode[h1].length; i++) {
      s = ".hhone-" + dig[encode[h1][i]];
      document.querySelector(s).style.setProperty("fill", fillOff);
      document.querySelector(s).style.setProperty("filter", filterOff);
    }

    for (let i = 0; i < encode[h2].length; i++) {
      s = ".hhtwo-" + dig[encode[h2][i]];
      document.querySelector(s).style.setProperty("filter", filterOff);
      document.querySelector(s).style.setProperty("fill", fillOff);
    }

    for (let i = 0; i < encode[m1].length; i++) {
      s = ".mmone-" + dig[encode[m1][i]];
      document.querySelector(s).style.setProperty("filter", filterOff);
      document.querySelector(s).style.setProperty("fill", fillOff);
    }

    for (let i = 0; i < encode[m2].length; i++) {
      s = ".mmtwo-" + dig[encode[m2][i]];
      document.querySelector(s).style.setProperty("filter", filterOff);
      document.querySelector(s).style.setProperty("fill", fillOff);
    }

    for (let i = 0; i < encode[s1].length; i++) {
      s = ".ssone-" + dig[encode[s1][i]];
      document.querySelector(s).style.setProperty("filter", filterOff);
      document.querySelector(s).style.setProperty("fill", fillOff);
    }

    for (let i = 0; i < encode[s2].length; i++) {
      s = ".sstwo-" + dig[encode[s2][i]];
      document.querySelector(s).style.setProperty("filter", filterOff);
      document.querySelector(s).style.setProperty("fill", fillOff);
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

      off(8, 8, 8, 8, 8, 8);
      writing(h1, h2, m1, m2, s1, s2);

      setTimeout(main, 500);
    }
    main();
  }, []);

  return (
    <div className="digital">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12%"
        height="auto"
        viewBox="108.5 0 283 500"
        className="digit a"
      >
        <g>
          <path fill="white" d="M364.077,178.029" />
          <polygon
            className="hhone-five"
            fill="white"
            points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656 	"
          />
          <polygon
            className="hhone-two"
            fill="white"
            points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
          />
          <polygon
            className="hhone-six"
            fill="white"
            points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
          />
          <polygon
            className="hhone-three"
            fill="white"
            points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
          />
          <polygon
            className="hhone-seven"
            fill="white"
            points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
          />
          <polygon
            className="hhone-four"
            fill="white"
            points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
          />
          <polygon
            fill="white"
            className="hhone-one"
            points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
          />
        </g>
      </svg>

      {/*<-- SECOND SVG -->*/}
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12%"
        height="auto"
        viewBox="108.5 0 283 500"
        className="digit b"
      >
        <g>
          <path fill="white" d="M364.077,178.029" />
          <polygon
            fill="white"
            className="hhtwo-five"
            points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656 	"
          />
          <polygon
            className="hhtwo-two"
            fill="white"
            points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
          />
          <polygon
            fill="white"
            className="hhtwo-six"
            points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
          />
          <polygon
            className="hhtwo-three"
            fill="white"
            points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
          />
          <polygon
            className="hhtwo-seven"
            fill="white"
            points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
          />
          <polygon
            fill="white"
            className="hhtwo-four"
            points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
          />
          <polygon
            fill="white"
            className="hhtwo-one"
            points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
          />
        </g>
      </svg>
      <span className="colon-container">
        <p className="colon">:</p>
      </span>

      {/*<-- THIRD SVG -->*/}
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12%"
        height="auto"
        viewBox="108.5 0 283 500"
        className="digit a"
      >
        <g>
          <path fill="white" d="M364.077,178.029" />
          <polygon
            fill="white"
            className="mmone-five"
            points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656"
          />
          <polygon
            fill="white"
            className="mmone-two"
            points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
          />
          <polygon
            fill="white"
            className="mmone-six"
            points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
          />
          <polygon
            className="mmone-three"
            fill="white"
            points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
          />
          <polygon
            className="mmone-seven"
            fill="white"
            points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
          />
          <polygon
            className="mmone-four"
            fill="white"
            points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
          />
          <polygon
            className="mmone-one"
            fill="white"
            points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
          />
        </g>
      </svg>

      {/*<-- FOURTH SVG -->*/}
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12%"
        height="auto"
        viewBox="108.5 0 283 500"
        className="digit b"
      >
        <g>
          <path fill="white" d="M364.077,178.029" />
          <polygon
            className="mmtwo-five"
            fill="white"
            points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656 	"
          />
          <polygon
            fill="white"
            className="mmtwo-two"
            points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
          />
          <polygon
            fill="white"
            className="mmtwo-six"
            points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
          />
          <polygon
            fill="white"
            className="mmtwo-three"
            points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
          />
          <polygon
            fill="white"
            className="mmtwo-seven"
            points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
          />
          <polygon
            fill="white"
            className="mmtwo-four"
            points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
          />
          <polygon
            className="mmtwo-one"
            fill="white"
            points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
          />
        </g>
      </svg>

      <span className="colon-container">
        <p className="colon">:</p>
      </span>
      {/*<-- FIFTH SVG -->*/}
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12%"
        height="auto"
        viewBox="108.5 0 283 500"
        className="digit a"
      >
        <g>
          <path fill="white" d="M364.077,178.029" />
          <polygon
            fill="white"
            className="ssone-five"
            points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656"
          />
          <polygon
            fill="white"
            className="ssone-two"
            points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
          />
          <polygon
            fill="white"
            className="ssone-six"
            points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
          />
          <polygon
            className="ssone-three"
            fill="white"
            points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
          />
          <polygon
            className="ssone-seven"
            fill="white"
            points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
          />
          <polygon
            className="ssone-four"
            fill="white"
            points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
          />
          <polygon
            className="ssone-one"
            fill="white"
            points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
          />
        </g>
      </svg>

      {/*<-- SIXTH SVG -->*/}
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12%"
        height="auto"
        viewBox="108.5 0 283 500"
        className="digit b"
      >
        <g>
          <path fill="white" d="M364.077,178.029" />
          <polygon
            className="sstwo-five"
            fill="white"
            points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656 	"
          />
          <polygon
            fill="white"
            className="sstwo-two"
            points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
          />
          <polygon
            fill="white"
            className="sstwo-six"
            points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
          />
          <polygon
            fill="white"
            className="sstwo-three"
            points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
          />
          <polygon
            fill="white"
            className="sstwo-seven"
            points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
          />
          <polygon
            fill="white"
            className="sstwo-four"
            points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
          />
          <polygon
            className="sstwo-one"
            fill="white"
            points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
          />
        </g>
      </svg>
    </div>
  );
};
