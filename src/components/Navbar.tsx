import React, { Component, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar absolute top-0 w-screen bg-bnb-dark shadow-md">
        <div className="flex-1 m-0">
          <a className="btn btn-ghost normal-case">
            <img src={logo} alt="" className="w-20"/>
          </a>
        </div>
        <div className="flex-1 gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="absolute top-2 right-3 h-16 w-16">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user} />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
