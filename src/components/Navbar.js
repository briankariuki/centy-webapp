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
        <div className="max-w-screen-xxl h-full lg:w-9/10 mx-auto flex text-centydark items-center justify-between">
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
              activeClassName=" text-centygreen border-b-2 border-centygreen"
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
            <div className="h-full flex flex-col justify-between">
              <div className="px-6 h-24 flex bg-centylightgrey">
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-centygreen lg:text-2xl text-xl font-medium leading-6">
                    Mwalimu Smart
                  </p>
                  <p className="mt-1 text-lg text-centydark">
                    Quizzes and Brain game
                  </p>
                </div>
              </div>
              <div className="pt-6 flex-1">
                <NavLink
                  onClick={this.toggle}
                  to="/my-dashboard"
                  className="focus:outline-none"
                  activeClassName="mobile-active-nav"
                >
                  <div
                    id="active-tab"
                    className="text-centygrey w-48 flex items-center space-x-4 mr-10 ml-6 px-4 py-3  focus:outline-none"
                  >
                    <div className=" h-10 w-10 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                      </svg>
                    </div>
                    <p className="font-medium text-lg">Dashboard</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/quizzes"
                  activeClassName="mobile-active-nav"
                >
                  <div
                    id="active-tab"
                    className="text-centygrey w-48 flex  items-center space-x-4 mr-10 ml-6 px-4 py-3  focus:outline-none"
                  >
                    <div className="h-10 w-10 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="font-medium text-lg">Quizzes</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/analytics"
                  activeClassName="mobile-active-nav"
                >
                  <div
                    id="active-tab"
                    className="text-centygrey w-48 flex  items-center space-x-4 mr-10 ml-6 px-4 py-3  focus:outline-none"
                  >
                    <div className="h-10 w-10 rounded-md flex items-center justify-center">
                      <svg
                        className="h-4 w-4 fill-current"
                        height="17"
                        viewBox="0 0 16 17"
                      >
                        <path d="M14,16V9a1,1,0,1,1,2,0v7a1,1,0,1,1-2,0ZM7,16V1A1,1,0,1,1,9,1V16a1,1,0,1,1-2,0ZM0,16V5A1,1,0,1,1,2,5V16a1,1,0,1,1-2,0Z" />
                      </svg>
                    </div>
                    <p className="font-medium text-lg">Analytics</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/profile"
                  activeClassName="mobile-active-nav"
                >
                  <div
                    id="active-tab"
                    className="text-centygrey w-48 flex  items-center space-x-4 mr-10 ml-6 px-4 py-3  focus:outline-none"
                  >
                    <div className="h-10 w-10 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <p className="font-medium text-lg">Profile</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/pricing"
                  activeClassName="mobile-active-nav"
                >
                  <div
                    id="active-tab"
                    className="text-centygrey w-48 flex  items-center space-x-4 mr-10 ml-6 px-4 py-3  focus:outline-none"
                  >
                    <div className="h-10 w-10 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                      </svg>
                    </div>
                    <p className="font-medium text-lg">Pricing</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={this.toggle}
                  to="/pricing"
                  activeClassName="mobile-active-nav"
                >
                  <div
                    id="active-tab"
                    className="text-centygrey w-48 flex  items-center space-x-4 mr-10 ml-6 px-4 py-3  focus:outline-none"
                  >
                    <div className="h-10 w-10 rounded-md flex items-center justify-center">
                      <svg
                        fill="none"
                        className="h-6 w-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p className="font-medium text-lg">About</p>
                  </div>
                </NavLink>
              </div>
              <div className="flex items-center justify-between py-4 bg-centylightgrey px-6">
                <div className="flex space-x-4 items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <p className="text-lg text-centygrey leading-6">
                    Justin Cook
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center justify-center text-centygrey focus:outline-none">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center text-centygrey focus:outline-none">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                  </button>
                </div>
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
