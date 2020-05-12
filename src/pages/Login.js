import React, { Component } from "react";
import Homebanner from "../assets/Group-334.png";
class Login extends Component {
  render() {
    return (
      <div className="max-w-screen-xl h-full w-full lg:w-4/5 mx-auto">
        <div className="lg:flex items-center">
          <div className="order-last lg:w-1/2 mx-auto">
            <div className="mx-auto lg:mt-20 mt-0 ">
              <img className="mx-auto banner-image" src={Homebanner} alt="" />
            </div>
          </div>
          <div className="order-first flex flex-col justify-center lg:w-1/2">
            <div className="lg:w-9/10 lg:mt-12">
              <div className="px-6 mt-4 lg:mt-0 lg:px-0">
                <h2 className="mt-4 leading-none font-bold lg:text-5xl text-2xl font-gilroy text-centydark">
                  Login to Start Learning
                </h2>

                <div className="lg:w-4/5 lg:mt-12 mt-6 ">
                  <form className="space-y-4" action="">
                    <div>
                      <p className=" my-2 text-lg text-centydark">Email</p>
                      <input
                        className="appearance-none block w-full text-centygrey bg-white border placeholder-gray-600 border-centygrey2 shadow-xs rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-centygreen focus:shadow-none "
                        placeholder="Enter Your Email Address"
                        type="text"
                        name="email"
                        // onChange={this.onChange}
                        // value={this.state.email}
                      />
                    </div>
                    <div>
                      <p className=" my-2 text-lg text-centydark">
                        Password or PIN
                      </p>
                      <input
                        className="appearance-none block w-full text-centygrey bg-white border placeholder-gray-600 border-centygrey2 shadow-xs rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-centygreen focus:shadow-none "
                        placeholder="Enter Your PIN"
                        type="password"
                        name="password"
                        // onChange={this.onChange}
                        // value={this.state.password}
                      />
                    </div>
                    <button className="w-48 py-3 bg-centygreen text-white rounded font-medium focus:outline-none hover:shadow-lg">
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
