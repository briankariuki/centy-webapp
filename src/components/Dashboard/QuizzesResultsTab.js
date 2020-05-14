import React from "react";
import PropTypes from "prop-types";
const QuizzesResultsTab = (props) => {
  const { subject, color, topic, result } = props;
  return (
    <div>
      <div className="min-w-80 lg:w-80">
        <div className="flex space-x-4 items-center">
          <div
            className="flex-shrink-0 cursor-pointer h-2 w-2 rounded-lg"
            style={{
              backgroundColor: color,
            }}
          ></div>
          <div className="flex-1">
            <p
              className="text-base"
              style={{
                color: color,
              }}
            >
              {subject}
            </p>
            <h2 className="truncate text-lg text-centydark leading-6">
              {topic}
            </h2>
          </div>
          <p className=" text-centygrey font-medium text-base lg:text-lg ">
            {result} %
          </p>
        </div>
      </div>
    </div>
  );
};

QuizzesResultsTab.propTypes = {
  result: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};
export default QuizzesResultsTab;
