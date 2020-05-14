import React from "react";
import PropTypes from "prop-types";
const InfoTab = (props) => {
  const { value, color, topic } = props;
  const hexColor = color;
  const opColor = hexColor + "26";
  return (
    <div>
      <div className="rounded-lg shadow-textarea min-w-80">
        <div className=" flex px-3 py-3 space-x-4 items-center">
          <div
            className="flex-shrink-0 cursor-pointer h-10 w-10 text-xl font-medium rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: opColor,
            }}
          >
            <span
              style={{
                color: color,
              }}
            >
              {value}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-centygrey">Stat</p>
            <h2 className="truncate font-medium text-lg text-centydark leading-6">
              {topic}
            </h2>
          </div>
          <button className="text-centygrey p-4 hover:text-centygreen focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

InfoTab.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};
export default InfoTab;
