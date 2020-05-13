import React, { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";

const LineBar = (props) => {
  const [offset, setOffset] = useState(0);
  const lineRef = useRef(null);
  const { size, progress, strokeWidth, lineOneStroke } = props;

  useEffect(() => {
    const progressOffset = (progress / 100) * size;
    setOffset(progressOffset);
  }, [setOffset, size, progress, offset]);

  return (
    <div>
      <div
        className="bg-gray-200 rounded-full"
        style={{
          width: size,
          height: strokeWidth,
        }}
      >
        <div
          className="rounded-full"
          ref={lineRef}
          style={{
            width: offset,
            height: strokeWidth,
            backgroundColor: lineOneStroke,
            transition: "all 450ms ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

LineBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lineOneStroke: PropTypes.string.isRequired,
};
export default LineBar;
