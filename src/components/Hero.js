import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../assets/wrapper/Hero";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <Wrapper>
      <section>
        <h1>
          Quality Fresh <br />
          Food Guaranteed
        </h1>
        <p>Shop qaulity fresh food on our website</p>
        <Link to="/products">
           <button type="button">
          Shop Now <FaArrowRight className="arrow"/>
        </button>
        </Link>
      </section>
    
    </Wrapper>
  );
};



export default Hero;
