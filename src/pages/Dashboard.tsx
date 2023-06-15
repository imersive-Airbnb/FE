import React, { Component } from "react";
import Navbar from "../components/Navbar";
import SmallCard from "../components/SmallCard";
import { place } from "../dummy-test/explore.json";
import { withRouter } from "../withRouter";

interface ButtonClick {
  navigate?: any;
}
export class Dashboard extends Component<ButtonClick> {
  render() {
    const {navigate} = this.props;
    return (
      <div>
        <Navbar />
        <section className="bg-cover h-[500px] bg-no-repeat bg-[url(https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto w-screen text-center py-24 lg:py-56">
            <p className="mb-8 text-lg font-normal text-gray-300 px-48">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href=""
                className="inline-flex justify-center bg-bnb-dark hover:text-gray-900 items-center py-3 
                px-5 text-base font-medium text-center text-white rounded-lg hover:bg-gray-100" onClick={() => navigate('/Stays')}
              >
                Explore
              </a>
            </div>
          </div>
        </section>
        <main className="max-w-7xl mx-auto px-8 mt-5">
          <section className="ml-5 pb-2">
            <h2 className="text-3xl text-bold color-bnb-dark ml-10 pb-2">
              Explore Nearby
            </h2>
            <div className="bg-white grid justify-items-center grid-cols-3 m-10 gap-x-8 gap-y-4">
              {place
                ? place.map((item, index) => {
                    return (
                      <SmallCard
                        key={index}
                        img={item.img}
                        location={item.location}
                        distance={item.distance}
                      />
                    );
                  })
                : undefined}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default withRouter(Dashboard);
