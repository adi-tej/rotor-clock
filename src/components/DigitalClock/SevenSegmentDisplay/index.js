import React from "react";
import "./index.css";

export const SevenSegmentDisplay = ({ customClass }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="12%"
    height="100%"
    viewBox="108.5 0 283 500"
    className="digit"
  >
    <g>
      <path fill="white" d="M364.077,178.029" />
      <polygon
        className={`${customClass}five`}
        fill="white"
        points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08
        117.5,280.557 140.5,257.656 	"
      />
      <polygon
        className={`${customClass}two`}
        fill="white"
        points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08
        117.5,59.557 140.5,36.656 	"
      />
      <polygon
        className={`${customClass}six`}
        fill="white"
        points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08
        337.5,280.557 360.5,257.656 	"
      />
      <polygon
        className={`${customClass}three`}
        fill="white"
        points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08
        337.5,59.557 360.5,36.656 	"
      />
      <polygon
        className={`${customClass}seven`}
        fill="white"
        points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5
        331.365,447.5 354.266,470.5 	"
      />
      <polygon
        className={`${customClass}four`}
        fill="white"
        points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5
        331.365,228.5 354.266,251.5 	"
      />
      <polygon
        className={`${customClass}one`}
        fill="white"
        points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5
        331.365,6.5 354.266,29.5 	"
      />
    </g>
  </svg>
);
