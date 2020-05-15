import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import store from "./store";
import Navbar from "./components/Navbar";
import Bfooter from "./components/Bfooter";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Quizzes from "./pages/Quizzes";
import QuizzPage from "./pages/QuizzPage";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  state = {
    isAuthenticated: false,
  };
  render() {
    const { isAuthenticated } = this.state.isAuthenticated;
    return (
      <Provider store={store}>
        <Router>
          <div className="relative flex flex-col min-h-screen">
            <div className="w-full fixed top-0 z-20 border-b">
              <Navbar />
            </div>

            <main className="my-16 relative flex-1 flex w-full">
              <Switch>
                {!isAuthenticated && <Redirect from="/home" to="/" exact />}
                {isAuthenticated && (
                  <Redirect from="/login" to="/my-dashboard" exact />
                )}
                <Route path="/my-dashboard" component={Dashboard} exact />
                <Route path="/quizzes" component={Quizzes} exact />
                <Route path="/quizz/1" component={QuizzPage} exact />
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={Login} exact />
              </Switch>
            </main>
            <div>
              <Bfooter />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(App);
