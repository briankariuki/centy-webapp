import React from "react";
import PropTypes from "prop-types";

const CurrentQuizDetail = (props) => {
  const { iconName, subject, topic, color, questions } = props;
  return (
    <div className="flex flex-col justify-between shadow-textarea rounded-lg">
      <div className="hidden-lg-down flex-1 space-x-8 lg:px-4 px-3 py-2 lg:py-6 flex justify-between items-center ">
        <div>
          <p
            className="py-1 text-sm lg:text-base"
            style={{
              color: color,
            }}
          >
            Current Quizz
          </p>
          <h2 className="lg:text-2xl text-xl text-centydark leading-6">
            {topic}
          </h2>
        </div>
        <div
          className="lg:w-16 lg:h-16 h-12 w-12 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: color,
          }}
        >
          <img
            className="lg:w-8 lg:h-8 h-6 w-6 fill-current"
            src={require(`../../assets/${iconName}.svg`)}
            alt=""
          />
        </div>
      </div>
      <div
        className="rounded-b-lg rounded-t-lg lg:rounded-t-none  lg:px-4 px-3 py-2 lg:py-6 flex items-center justify-between"
        style={{
          backgroundColor: color,
        }}
      >
        <p className="hidden-lg-down text-lg text-white">{subject}</p>
        <p className="hidden-sm-up text-lg text-white">{topic}</p>

        <div>
          <p className="truncate text-base text-white">{questions} Questions</p>
        </div>
      </div>
    </div>
  );
};

CurrentQuizDetail.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  questions: PropTypes.number.isRequired,
};
export default CurrentQuizDetail;
