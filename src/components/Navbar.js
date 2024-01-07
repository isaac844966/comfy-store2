import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import menu1 from "../assets/pepper-hot.png";
import menu2 from "../assets/restaurant.png";
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import { FaBars } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import Wrapper from "../assets/wrapper/Navbar";


const Nav = () => {
  return (
    <Wrapper>
          <div className="nav-menu">
        <img src={logo} alt="logo" loading="lazy" className="logo"/>
        <FaBars className="bar"/>
        </div>
      <section>
    
      <div className="nav-container">
        <div className="nav-left">
           {links.map((link) => {
            const { id, text, url } = link;
             return (
              <Link key={id} to={url} className="text">
                 {text}
              </Link>
            );
           })}
         </div>
         <div className="nav-center">
           <p>100% Secure delivery without contacting the courier</p>
         </div>
         <div className="nav-right">
           <p>Need help? Call Us: + 0020 500</p>
           <p>USD</p>
         </div>
       </div>
        <nav>
          <img src={logo} alt="logo" loading="lazy" className="logo"/>
            <div className="location">
           <div>
             <span>your location</span>
             <p>Washington</p>
           </div>
           <BsChevronDown />
         </div>
         <div className="search-container">
           <BsSearch />
           <input type="search" placeholder="Search for products" />
         </div>
         <div className="menu">
          <img src={menu1} />
          <p>
             Shop
             <br /> Dry Food
           </p>
         <BsChevronDown />
         </div>
         <div className="menu">
           <img src={menu2} />
           <p>
             Shop
            <br /> Dry Food
           </p>
          <BsChevronDown />
         </div>
        <div className="last-container">
           <img src={user}/>
           <div className="cart">
            <img src={cart}/>
           <span>1</span>
            </div>
            </div>
        </nav>
      </section>
</Wrapper>
    // <NavContainer>
    //  
    //   <nav>
    //   </nav>
    //   <div className="navbar">
    //     <img src={logo} />
    //     <div className="location">
    //       <div>
    //         <span>your location</span>
    //         <p>Washington</p>
    //       </div>
    //       <BsChevronDown />
    //     </div>
    //     <div className="search-container">
    //       <BsSearch />
    //       <input type="search" placeholder="Search for products" />
    //     </div>
    //     <div className="menu">
    //       <img src={menu1} />
    //       <p>
    //         Shop
    //         <br /> Dry Food
    //       </p>
    //       <BsChevronDown />
    //     </div>
    //     <div className="menu">
    //       <img src={menu2} />
    //       <p>
    //         Shop
    //         <br /> Dry Food
    //       </p>
    //       <BsChevronDown />
    //     </div>
    //     <div className="last-container">
    //       <img src={user}/>
    //       <div className="cart">
    //         <img src={cart}/>
    //         <span>1</span>
    //       </div>
    //     </div>
    //   </div>
    // </NavContainer>
  );
};

const NavContainer = styled.nav``


// @media screen and (min-width: 992px){
//   .nav-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid #e2e8f0;
//     padding: 0.5rem 72px;
//   }
//   .nav-left {
//     display: flex;
//     gap: 1rem;
//   }
//   .text {
//     color: var(--Neutral400);
//     font-weight: 400;
//     font-size: 14px;
//   }
//   p {
//     color: var(--Neutral400);
//     font-size: 14px;
//     font-weight: 400;
//     margin-bottom: 0;
//   }
//   .nav-right {
//     display: flex;
//     gap: 1rem;
//   }
// }
// @media screen and (min-width: 992px){
//   .navbar {
//     display: grid;
//     grid-template-columns: auto auto 1fr auto auto auto;
//     gap: 2.5rem;
//     align-items: center;
//     border-bottom: 1px solid #e2e8f0;
//     padding: 1rem 72px;
//   }
//   .location {
//     box-shadow: 4px 4px 10px 0px #0000000d;
//     padding: 1rem;
//     display: flex;
//     justify-content: center;
//     gap: 3.5rem;
//     align-items: center;
//     span {
//       color: var(---Neutral400);
//       font-size: 14px;
//       font-weight: 400;
//       text-transform: capitalize;
//       margin-bottom: 0.6rem;
//     }
//     p {
//       color: var(--pink);
//       font-size: 16px;
//     }
//   }
//   img {
//     width: 6rem;
//   }
//   svg {
//     font-size: 1rem;
//     font-weight: 800;
//     color: #000;
//   }
//   .search-container {
//     background: var(--Neutral100);
//     padding: 0.5rem 1rem;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     border-radius: 5px;
//     input {
//       background: var(--Neutral100);
//       color: var(--Neutral500);
//       border: none;
//       width: 100%;
//       height: 3rem;
//     }
//     input::placeholder{
//     color:var(--Neutral500);
//     font-size: 16px;
//     }
//   }
//   .menu {
//     display: flex;
//     align-items: center;
//     gap: 0.7rem;
//     img {
//       width: 2.5rem;
//     }
//     p {
//       font-size: 16px;
//       color: var(--black);
//       font-weight: 600;
//     }
//     svg {
//       font-weight: 900;
//     }
//   }
//   .last-container{
//   display:flex;
//   align-items: center;
//   gap: 1rem;
//   .cart{
// position:relative;
// span{
// position: absolute;
// top:0;
// right:0;
// background:var(--pink);
// color:var(--white);
// font-size: 12px;
// padding: 0.1rem 0.4rem;
// border-radius:100%
// }
//   }
//   img{
//   width: 3rem;
//  height: 3rem;
//   }
  
//   svg{
//   width: 1.2rem;
//  height: 1.2rem;
//   }
//   }
// }
  
// `;

export default Nav;
