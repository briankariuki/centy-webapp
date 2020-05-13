import React, { Component } from "react";
import Banner from "../components/Dashboard/Banner";
import Progress from "../components/Dashboard/Progress";
import SubjectsCard from "../components/Dashboard/SubjectsCard";
import ExamsCard from "../components/Dashboard/ExamsCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="lg:mt-16 mt-4 max-w-screen-xxl px-4 lg:px-0 lg:w-4/5 mx-auto">
        <div className="lg:flex lg:space-x-8 space-x-0">
          <Banner />
          <div className="mt-4 lg:mt-0">
            <Progress />
          </div>
        </div>
        <div className="lg:mt-12 mt-6 lg:flex lg:space-x-8 space-x-0">
          <SubjectsCard />
          <div className="mt-4 lg:mt-0">
            <ExamsCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
