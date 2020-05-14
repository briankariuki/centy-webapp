import React, { Component } from "react";
import QuizzesTab from "./QuizzesTab";
import {
  centygreen,
  centyorange,
  centypink,
  centyblue,
  centypurple,
  centyteal,
} from "../../factories/colorClasses";

class RecommendedQuizzes extends Component {
  render() {
    return (
      <div className="rounded-lg shadow-textarea">
        <div className="lg:px-4 px-3 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg text-centydark">
              Recommended Quizzes
            </h2>
            <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
              See All
            </button>
          </div>
          <div className="mt-2 min-w-80 lg:min-w-0 lg:w-80">
            <ul className="list-style-none">
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Chemistry"
                  topic="Molecular Structure"
                  color={centypink}
                  questionsNum={8}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Physics"
                  topic="Newton's Laws of Motion"
                  color={centyteal}
                  questionsNum={12}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Biology"
                  topic=" Evolution"
                  color={centyorange}
                  questionsNum={12}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedQuizzes;
