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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="relative flex flex-col min-h-screen">
            <div className="w-full fixed top-0 z-20">
              <Navbar />
            </div>

            <main className="mt-16 relative flex-1 w-full">
              <Switch>
                <Route path="/" component={HomePage} exact />
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
