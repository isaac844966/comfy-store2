import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ id, name, oldPrice, price, img, category, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card ${isHovered ? "hovered" : ""}`} key={id}>
        <img src={img} alt="product" />
        <p className="category">{category}</p>
        <p className="name">{name}</p>
        <p className="price">
          ${price} <span className="oldPrice">{oldPrice}</span>
        </p>
        {isHovered && <button>Add to Cart</button>}
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
 
  .category {
    color: var(--Neutral400);
    font-size: 10px;
    font-weight: 600;
    line-height: 14.06px;
    margin-bottom: 0.5rem;
    margin-left:10px
  }
  .name {
    color: black;
    font-weight: 500;
    font-size: 16px;
    line-height: 22.5px;
    margin-bottom: 0.5rem;
    margin-left:10px
  }
  .price {
    color: black;
    font-weight: 700;
    font-size: 16px;
    line-height: 22.5px;
    margin-bottom: 1.5rem;
    margin-left:10px
  }
  .oldPrice {
    color: var(--Neutral400);
    font-weight: 400;
    font-size: 16px;
    line-height: 22.5px;
    margin-left: 0.5rem;
  }
  .card {
    padding:10px;
    margin-right: ${(props) =>
      props.marginRight || "0.5rem"}; /* Set the margin-right */

    &:hover {
      background-color: white;
      box-shadow: 0px 0px 48px 0px #0000001a;
      border-radius: 8px;
    }
    &.hovered {
      width: 100%;
      button {
        opacity: 1;
        width: 100%;
        padding: 20px;
        border-radius: 100px;
        visibility: visible;
        color:var(--white);
        border:none;
        background-color: var(--pink);
      }
    }

    button {
      opacity: 0; /* Hide the button by default */
      visibility: hidden;
      transition: opacity 0.3s ease-in-out; /* Add a smooth transition effect */
    }
  }
`;
