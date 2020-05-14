import React from "react";
import PropTypes from "prop-types";
const QuizzesTab = (props) => {
  const { subject, color, topic, questionsNum } = props;
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
            <div className="flex space-x-4 items-center">
              <p
                className="text-base"
                style={{
                  color: color,
                }}
              >
                {subject}
              </p>
              <p className="text-sm text-centygrey">{questionsNum} Questions</p>
            </div>
            <h2 className="truncate text-lg text-centydark leading-6">
              {topic}
            </h2>
          </div>
          <button className="text-centygrey p-2 hover:text-centygreen focus:outline-none">
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

QuizzesTab.propTypes = {
  questionsNum: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};
export default QuizzesTab;
