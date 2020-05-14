import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Transition from "../components/Transition";

class Navbar extends Component {
  state = {
    isOpen: false,
    isDropdownOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  toggleDropdown = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
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
      <nav className="relative bg-white h-16  px-4 lg:px-0">
        <div className="max-w-screen-xxl h-full lg:w-4/5 mx-auto flex text-centydark items-center justify-between">
          <NavLink to="/">
            <p className="lg:text-2xl text-xl font-medium leading-6">
              Mwalimu Smart
            </p>
          </NavLink>
          <div className=" hidden-lg-down space-x-3 flex items-center text-centygrey">
            <NavLink
              to="/my-dashboard"
              className="hover:text-centygreen px-4 py-5 focus:outline-none"
              activeClassName=" text-centygreen border-b-2 border-centygreen"
            >
              <p className="font-medium">Dashboard</p>
            </NavLink>
            <NavLink
              to="/quizzes"
              className="hover:text-centygreen px-4 py-5 focus:outline-none"
            >
              <p className="font-medium">Quizzes</p>
            </NavLink>
            <NavLink
              to="/analytics"
              className="hover:text-centygreen px-4 py-5 focus:outline-none"
            >
              <p className="font-medium">Analytics</p>
            </NavLink>
            <NavLink
              to="/profile"
              className="hover:text-centygreen px-4 py-5 focus:outline-none"
            >
              <p className="font-medium">Profile</p>
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-centygreen px-4 py-5 focus:outline-none"
            >
              <p className="font-medium">About</p>
            </NavLink>
            <NavLink
              to="/pricing"
              className="hover:text-centygreen px-4 py-5 focus:outline-none"
            >
              <p className="font-medium">Pricing</p>
            </NavLink>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="hidden-lg-down">
              <button className="w-40 py-3 bg-centygreen text-white rounded font-medium focus:outline-none hover:shadow-lg">
                Sign In
              </button>
            </div>

            <div>
              <button
                className="max-w-xs flex h-10 w-10 items-center text-sm rounded-full bg-gray-200 text-centygrey focus:outline-none focus:shadow-lg hover:bg-green-200 hover:text-centygreen"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
                // onClick={this.toggleDropdown}
              >
                <svg
                  fill="none"
                  className="mx-auto h-6 w-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </button>
            </div>
            <div className="ml-3 flex-shrink-0 relative">
              <div>
                <button
                  className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-lg"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={this.toggleDropdown}
                >
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <Transition
                show={this.state.isDropdownOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-xl">
                  <div
                    className="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </Transition>
            </div>
            <button className={mobileNavToggle} onClick={this.toggle}>
              <div className="bar-1"></div>
              <div className="bar-2 my-1"></div>
              <div className="bar-3"></div>
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
                <NavLink
                  onClick={this.toggle}
                  to="/my-dashboard"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Dashboard</p>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">About</p>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Pricing</p>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Register</p>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Login</p>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/"
                  className="focus:outline-none"
                >
                  <p className="py-4 px-6 font-medium">Contact Us</p>
                </NavLink>
              </div>
            </div>
          </div>
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
