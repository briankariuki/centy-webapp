import React, { Component } from "react";
import QuizzesResultsTab from "./QuizzesResultsTab";
import {
  centygreen,
  centyorange,
  centypink,
  centyblue,
  centypurple,
  centyteal,
  centygrey,
  centygrey2,
} from "../../factories/colorClasses";

class QuizzesResults extends Component {
  render() {
    return (
      <div className="rounded-lg shadow-textarea">
        <div className="lg:px-4 px-3 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg text-centydark">
              Latest Quizzes Results
            </h2>
            <button className="w-20 px-2 py-2 bg-orange-200 text-centyorange text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centyorange">
              See More
            </button>
          </div>
          <div className="mt-2 min-w-80 lg:min-w-0 lg:w-80">
            <ul className="list-style-none">
              <li className="border-b py-4">
                <QuizzesResultsTab
                  subject="Physics"
                  topic="States of matter"
                  color={centyteal}
                  result={68}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesResultsTab
                  subject="Chemistry"
                  topic="Molecular Structure 2"
                  color={centypink}
                  result={82}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesResultsTab
                  subject="Mathematics"
                  topic="Integration"
                  color={centygreen}
                  result={74}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesResultsTab
                  subject="Kiswahili"
                  topic="Sauti za Lugha"
                  color={centygrey}
                  result={83}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesResultsTab
                  subject="English"
                  topic="Phrasal Verbs"
                  color={centypurple}
                  result={75}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizzesResults;
