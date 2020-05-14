import React, { Component } from "react";
import QuizzesTab from "./QuizzesTab";
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

class RecentQuizzes extends Component {
  render() {
    return (
      <div className="rounded-lg shadow-textarea">
        <div className="lg:px-4 px-3 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg text-centydark">
              Recent Quizzes
            </h2>
            <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
              See More
            </button>
          </div>
          <div className="mt-2 min-w-80 lg:min-w-0 lg:w-80">
            <ul className="list-style-none">
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Physics"
                  topic="States of matter"
                  color={centyteal}
                  questionsNum={9}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Chemistry"
                  topic="Molecular Structure 2"
                  color={centypink}
                  questionsNum={15}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Mathematics"
                  topic="Integration"
                  color={centygreen}
                  questionsNum={7}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesTab
                  subject="Kiswahili"
                  topic="Sauti za Lugha"
                  color={centygrey}
                  questionsNum={10}
                />
              </li>
              <li className="border-b py-4">
                <QuizzesTab
                  subject="English"
                  topic="Phrasal Verbs"
                  color={centypurple}
                  questionsNum={17}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentQuizzes;
