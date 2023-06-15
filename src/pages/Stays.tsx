import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { list } from "../dummy-test/dummy-test.json";

class Stays extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="m-10 mt-20 flex flex-col ">
          <p className="text-4xl text-semibold color-bnb-dark border-b-2 border-bnb-dark mb-5">Stays</p>
          {list
            ? list.map((item, index) => {
                return (
                  <Card
                    key={index}
                    id="list"
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                );
              })
            : undefined}
        </div>
        
      </div>
    );
  }
}

export default Stays;
