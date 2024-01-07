import React from "react";
import { data } from "../data";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from "./Card";

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev"></button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next"></button>
);
const ProductCard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1074,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <CustomArrowStyles>
        <Slider {...settings} className="container">
          {data.map((item,index) => {
            const { id, name, oldPrice, price, img, category } = item;
            return (
              <Card
                id={id}
                name={name}
                oldPrice={oldPrice}
                price={price}
                img={img}
                category={category}
                style={{
                  backgroundColor: "red",
                  marginRight: index < data.length - 1 ? "1rem" : 0,
                }}
              />
            );
          })}
        </Slider>
      </CustomArrowStyles>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  img {
    width: 90%;
    margin: 0 auto;
  }
  .container {
padding:1rem;
    margin: 0 auto;
  
  }
`;
const CustomArrowStyles = styled.div`
  .slick-prev {
   margin-left:1.3rem
  }
  .slick-next{
    margin-right:3rem
  }
  .slick-prev,
  .slick-next {
    display:none;
    background-color: none;
    color: black;
    border: none;
    margin-top: -3rem;
    cursor: pointer;
    z-index: 1;
    
    &::before {
      color: var(--black);
      font-size: 2.5rem;
     
    }
  }
`;

export { CustomPrevArrow, CustomNextArrow, CustomArrowStyles };
