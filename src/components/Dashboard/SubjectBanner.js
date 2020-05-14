import React from "react";
import PropTypes from "prop-types";

const SubjectBanner = (props) => {
  const { iconName, color, subject } = props;

  return (
    <div className="xl:w-56 lg:px-4 lg:py-4 py-2 px-2 shadow-textarea rounded-lg flex space-x-4 items-center">
      <div
        className="flex-shrink-0 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center rounded-full"
        style={{
          backgroundColor: color,
        }}
      >
        <img
          className="lg:h-5 lg:w-5 w-4 h-4 fill-current"
          src={require(`../../assets/${iconName}.svg`)}
          alt=""
        />
      </div>
      <div className="">
        <p className=" text-center text-centydark  text-sm lg:text-lg ">
          {subject}
        </p>
      </div>
    </div>
  );
};

SubjectBanner.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};
export default SubjectBanner;
