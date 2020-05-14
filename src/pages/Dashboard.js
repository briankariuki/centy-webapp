import React, { Component } from "react";
import Banner from "../components/Dashboard/Banner";
import Progress from "../components/Dashboard/Progress";
import SubjectsCard from "../components/Dashboard/SubjectsCard";
import ExamsCard from "../components/Dashboard/ExamsCard";
import RecommendedQuizzes from "../components/Dashboard/RecommendedQuizzes";
import InfoTab from "../components/Dashboard/InfoTab";
import AppBanner from "../components/Dashboard/centyAppBanner";
import {
  centygreen,
  centyorange,
  centypink,
  centyblue,
  centypurple,
  centyteal,
} from "../factories/colorClasses";

class Dashboard extends Component {
  render() {
    return (
      <div className="lg:mt-16 mt-4 max-w-screen-xxl px-4 lg:px-0 lg:w-9/10 mx-auto">
        <div className="lg:flex lg:space-x-8 space-x-0">
          <Banner />
          <div className="mt-4 lg:mt-0">
            <Progress />
          </div>
        </div>
        <div className="lg:mt-12 mt-6 md:flex flex-wrap">
          <div className="flex mt-4 md:mr-6 mr-0  lg:mt-0">
            <ExamsCard />
          </div>
          <div className="mt-4 md:mr-6 mx-0 lg:mt-0">
            <InfoTab value={6} topic="Completed Quizzes" color="#00BB79" />
            <div className="mt-4">
              <InfoTab value={3} topic="Incomplete Quizzes" color="#FF9057" />
            </div>
            <div className="mt-4">
              <RecommendedQuizzes />
            </div>
          </div>

          <div className="flex md:mr-6 my-4 lg:my-0 mr-0 ">
            <SubjectsCard />
          </div>
          <div className="my-4 xxl:my-6">
            <AppBanner />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
