import React, { Component } from "react";
import ToolBar from "./Questions Panel/ToolBar";
import ChoiceButton from "./Questions Panel/ChoiceButton";

class QuestionsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }
  onChange = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };
  setAnswer = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };
  render() {
    return (
      <div className="bg-centylightblue rounded-lg shadow-textarea">
        <div>
          <ToolBar />
        </div>
        <div className=" lg:p-4 p-2">
          <div className="mx-auto lg:w-4/5">
            <form className="">
              <div className="px-4 lg:px-0 lg:mt-8 mt-4">
                <h1 className="text-center lg:text-3xl text-xl text-centydark font-medium leading-6">
                  Which one of the following is not a part of an atom?
                </h1>
              </div>
              <div className="px-4 lg:px-0 lg:mt-16 mt-6 grid lg:grid-cols-2 lg:gap-6 gap-4">
                <div className="col-span-1">
                  <ChoiceButton
                    changed={this.onChange}
                    id="1"
                    value="Neutrons"
                  />
                </div>
                <div className="col-span-1">
                  <ChoiceButton changed={this.onChange} id="1" value="Ions" />
                </div>
                <div className="col-span-1">
                  <ChoiceButton
                    changed={this.onChange}
                    id="1"
                    value="Protons"
                  />
                </div>
                <div className="col-span-1">
                  <ChoiceButton
                    changed={this.onChange}
                    id="1"
                    value="Electrons"
                  />
                </div>
              </div>
              <div className="lg:my-16 my-8">
                <div className="mx-auto max-w-content flex items-center space-x-4">
                  <button className="lg:w-32 w-28 rounded-md px-4 py-2 bg-centygrey3 text-centygrey flex items-center space-x-2 focus:outline-none">
                    <svg
                      className="flex-shrink-0 w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="lg:text-xl font-medium">Check</p>
                  </button>
                  <div className="tooltip">
                    <button className="hover:text-white hover:bg-centygreen rounded-md px-2 py-2 bg-centygrey3 text-centygrey flex items-center space-x-3 focus:outline-none">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </button>
                    <span className="tooltiptext font-medium">Hint</span>
                  </div>
                  <button className="lg:w-32 w-28 rounded-md px-4 py-2 bg-centyblue text-white hover:bg-blue-200 hover:text-centyblue flex items-center space-x-2 focus:outline-none">
                    <svg
                      className="flex-shrink-0 w-7 h-7"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="lg:text-xl text-lg font-medium">Next</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsPanel;
