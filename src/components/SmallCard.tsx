import React, { Component } from "react";
interface SmallProps {
  img?: string;
  location?: string;
  distance?: string;
}

export class SmallCard extends Component<SmallProps> {
  render() {
    const { img, location, distance } = this.props;
    return (
      <div className="flex items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform-duration-200 ease-out">
        {/* //   kiri */}
        <div className="relative h-16 w-16">
          <img src={img} alt="" className="rounded-lg" />
        </div>
        {/* //   kanan */}
        <div>
          <h2>{location}</h2>
          <h3>{distance}</h3>
        </div>
      </div>
    );
  }
}

export default SmallCard;
