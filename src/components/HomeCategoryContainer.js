import React from "react";
import dryfood from "../assets/dry-food.png";
import cookedfood from "../assets/cooked-food.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Wrapper from "../assets/wrapper/HomeCategoryContainer";

const HomeCategoryContainer = () => {
  return (
    <Wrapper>
      <div className="category-container">
        <div className="category one">
          <div>
            <h4>
              Shop <br />
              Dry Food
            </h4>
            <Link to="/products" className="link">
              Shop Now <FaArrowRight />
            </Link>
          </div>

          <img src={dryfood} alt="dry food" />
        </div>
        <div className="category two">
          <div>
            <h4>
              Shop <br />
              Dry Food
            </h4>
            <Link to="/products" className="link">
              Shop Now <FaArrowRight />
            </Link>
          </div>

          <img src={cookedfood} alt="cooked food" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeCategoryContainer;
