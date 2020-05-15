import React, { Component } from "react";
import {
  centygreen,
  centyorange,
  centypink,
  centyblue,
  centypurple,
  centyteal,
} from "../factories/colorClasses";
import CurrentQuizDetail from "../components/Quizz/CurrentQuizDetail";
import QuestionsPanel from "../components/Quizz/QuestionsPanel";

class QuizzPage extends Component {
  render() {
    return (
      <div className="w-full lg:mt-16 mt-4 max-w-screen-xxl px-4 lg:px-0 lg:w-9/10 mx-auto">
        <div className="lg:flex space-x-0 space-y-4 lg:space-y-0 lg:space-x-8">
          <div>
            <CurrentQuizDetail
              subject="Chemistry"
              iconName="chemistry"
              topic="Atomic Structure"
              color={centypink}
              questions={8}
            />
          </div>
          <div className="flex-1">
            <QuestionsPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default QuizzPage;
