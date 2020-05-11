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
      "absolute z-20 top-0 left-0 hidden-lg-up text-black h-screen w-72 flex flex-col bg-white shadow-lg mobile-nav ";
    if (this.state.isOpen) {
      mobileNavClasses += "mobile-nav-open";
    }
    let mobileNavToggle =
      "ml-4 focus:outline-none text-white z-20 hidden-lg-up ";
    if (this.state.isOpen) {
      mobileNavToggle += "change";
    }

    return (
      <nav className="relative bg-white lg:py-2 py-4 px-4 lg:px-0">
        <div className="max-w-screen-xl lg:w-4/5 mx-auto flex text-centydark items-center justify-between">
          <Link to="/">
            <p className="lg:text-2xl text-xl font-medium leading-6">
              Mwalimu Smart
            </p>
          </Link>

          <div className="hidden-lg-down space-x-6 flex items-center">
            <Link className="hover:text-centygreen px-4 focus:outline-none">
              <p className="font-medium">About</p>
            </Link>
            <Link className="hover:text-centygreen px-4 focus:outline-none">
              <p className="font-medium">Pricing</p>
            </Link>
            <button className="w-40 py-3 bg-centygreen text-white rounded font-medium focus:outline-none hover:shadow-lg">
              Sign In
            </button>
          </div>

          <div className={mobileNavClasses}>
            <div className="">
              <div className="px-6 h-24 flex bg-centylightgrey">
                <div className="flex-1 flex flex-col justify-center">
                  <p className="lg:text-2xl text-xl font-medium leading-6">
                    Mwalimu Smart
                  </p>
                </div>
              </div>
              <div className="flex-1 h-full">
                <Link
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">About</p>
                </Link>
                <Link
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Pricing</p>
                </Link>
                <Link
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Register</p>
                </Link>
                <Link
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Login</p>
                </Link>
                <Link
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
          <button className={mobileNavToggle} onClick={this.toggle}>
            <div className="bar-1"></div>
            <div className="bar-2 my-1"></div>
            <div className="bar-3"></div>
          </button>
        </div>

        {this.state.isOpen ? (
          <div
            className="hidden-lg-up  top-0 left-0 absolute sidebar-backdrop cursor-pointer"
            onClick={this.toggle}
          ></div>
        ) : null}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Navbar);
