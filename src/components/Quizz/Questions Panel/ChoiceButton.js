import React from "react";

const ChoiceButton = (props) => {
  const { id, changed, value, isSelected } = props;
  return (
    // <label className="bg-white rounded-lg checkbox-container px-4 py-5 shadow-textarea flex items-center">
    //   {value}
    //   <input
    //     id={id}
    //     type="radio"
    //     value={value}
    //     // checked={isSelected}
    //     // onChange={changed}
    //   />
    //   <span className="checkmark flex items-center justify-center"></span>
    // </label>
    <label class="checkbox-container bg-white rounded-lg lg:px-6 px-4 lg:py-5 py-3 shadow-textarea flex items-center">
      <input
        id={id}
        type="radio"
        name="radio"
        value={value}
        checked={isSelected}
        onChange={changed}
      />
      <span class="flex-shrink-0 checkmark flex items-center justify-center"></span>
      <p className="px-4 lg:text-xl text-lg text-centygrey font-medium">
        {value}
      </p>
    </label>
    // <label class="checkbox-container bg-white rounded-lg px-4 py-5 shadow-textarea flex items-center">
    //   <input type="radio" name="radio" />
    //   <span class="checkmark flex items-center justify-center"></span>
    //   <p className="px-4 text-xl">One</p>
    // </label>
  );
};

export default ChoiceButton;
