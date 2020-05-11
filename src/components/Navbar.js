import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  logoutClick = (e) => {
    this.props.logout();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    let mobileNavClasses =
      "absolute z-20 top-0 left-0 hidden-lg-up text-black h-screen w-72 flex flex-col bg-white shadow-lg mobile-nav";
    if (this.state.isOpen) {
      mobileNavClasses += "mobile-nav-open";
    }
    let mobileNavToggle =
      "ml-4 focus:outline-none text-white z-20 hidden-lg-up ";
    if (this.state.isOpen) {
      mobileNavToggle += "change";
    }

    return (
      <nav className="relative bg-green-500 py-3 px-6 lg:px-0">
        <div className="max-w-screen-xl lg:w-4/5 mx-auto flex items-center justify-between">
          My awesome navbar
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Navbar);
