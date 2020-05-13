import React, { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;

  const center = size / 2;
  const centerText = size / 1.7;
  const strokeWidth2 = strokeWidth / 1.2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = (progress / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = "animation: progress 750ms ease-in-out forwards;";
  }, [setOffset, circumference, progress, offset]);

  return (
    <div>
      <svg
        className="block fill-current text-transparent"
        width={size}
        height={size}
      >
        <circle
          className="fill-none"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth2}
        />
        <circle
          className="fill-none"
          ref={circleRef}
          stroke={circleTwoStroke}
          strokeDasharray={offset}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          transform="rotate(-90 ) translate(-100 0)"
          strokeLinecap="round"
        />
        <text
          className="text-xl  text-white text-anchor-middle fill-current text-bold"
          x={center}
          y={centerText}
        >
          {progress} %
        </text>
      </svg>
    </div>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};
export default ProgressBar;
