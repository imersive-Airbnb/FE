import React, { Component } from "react";
import { withRouter } from "../withRouter";

interface CardProps {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  price?: string;
  navigate?: any;
}

class Card extends Component<CardProps> {
  render() {
    const {id, title, image, description,price, navigate} = this.props;
    return (
      <div>
        <div className="m-3 card w[50%] flex flex-row bg-base-100 shadow-xl" id={id}>
          <figure>
            <img
              src={image}
              alt=""
              height={200}
              width={300}
              className="thumbnail rounded-md"
            />
          </figure>
          <div className="card-body w-500 h-75">
            <div className="top">
              <h2 className="card-title text-semibold color-bnb-dark">
               {title}
              </h2>
              <div className="rating w[50%]">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>{description}</p>
            </div>
            <div className="card-actions flex justify-between mx-2">
              <h2 className="text-bold color-bnb-dark">{price}</h2>
              <button className="btn bg-bnb-dark text-white " onClick={() => navigate('/CheckAvailability')}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
