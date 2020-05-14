import React, { Component } from "react";
import InfoTab from "../components/Dashboard/InfoTab";
import RecommendedQuizzes from "../components/Dashboard/RecommendedQuizzes";
import RecentQuizzes from "../components/Dashboard/RecentQuizzes";
import QuizzesResults from "../components/Dashboard/QuizzesResults";
import SubjectBanner from "../components/Dashboard/SubjectBanner";
import {
  centygreen,
  centyorange,
  centypink,
  centyblue,
  centypurple,
  centyteal,
} from "../factories/colorClasses";

class Quizzes extends Component {
  render() {
    return (
      <div className="w-full lg:mt-16 mt-4 max-w-screen-xxl px-4 lg:px-0 lg:w-9/10 mx-auto">
        <div className="lg:flex lg:space-x-10 space-x-0">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-lg text-centydark">
                Brain Game and Subjects
              </h2>
              <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
                See More
              </button>
            </div>
            <div className="py-4 grid grid-cols-2 xxl:grid-cols-3 gap-4">
              <div className="col-span-1">
                <SubjectBanner
                  iconName="gift"
                  color={centyblue}
                  subject="Brain Game"
                />
              </div>
              <div className="col-span-1">
                <SubjectBanner
                  iconName="mathematics"
                  color={centygreen}
                  subject="Mathematics"
                />
              </div>
              <div className="col-span-1">
                <SubjectBanner
                  iconName="biology"
                  color={centyorange}
                  subject="Biology"
                />
              </div>
              <div className="col-span-1">
                <SubjectBanner
                  iconName="chemistry"
                  color={centypink}
                  subject="Chemistry"
                />
              </div>
              <div className="col-span-1">
                <SubjectBanner
                  iconName="physics"
                  color={centyteal}
                  subject="Physics"
                />
              </div>
            </div>
          </div>
          <div className=" my-4 lg:my-0 xl:max-w-content">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-lg text-centydark">
                Results Overview
              </h2>
              <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
                See More
              </button>
            </div>
            <div className="lg:flex lg:space-x-4 space-x-0">
              <div className="py-4  lg:mt-0">
                <InfoTab
                  value={6}
                  topic="Completed Quizzes"
                  color={centygreen}
                />
                <div className="mt-4">
                  <InfoTab
                    value={3}
                    topic="Incomplete Quizzes"
                    color={centyorange}
                  />
                </div>
              </div>
              <div className="py-4 lg:mt-0">
                <InfoTab
                  value={95}
                  topic="High Score Quizzes"
                  color={centyteal}
                />
                <div className="mt-4">
                  <InfoTab value={2} topic="Brain Games" color={centypurple} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:space-x-8 space-x-0">
          <div className=" my-4">
            <RecentQuizzes />
          </div>
          <div className=" my-4">
            <RecommendedQuizzes />
          </div>
          <div className=" my-4">
            <QuizzesResults />
          </div>
        </div>
      </div>
    );
  }
}

export default Quizzes;
