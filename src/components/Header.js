import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div className="header">
        <p>Promo advertisment can come here!</p>
        <p>Enjoy free delivery on your first order on Aunty Agi’s Kitchen</p>
        <p>Promo advertisment can come here!</p>
      </div>
    </Wrapper>
  );
};

export default Header;


const Wrapper = styled.div`
display:none;
  @media screen and (min-width: 992px) {
    display:block;
    .header {
      /* margin-top:-8rem; */
      top:0;
      z-index: 1;
      background: var(--pink);
      position:fixed;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 0.3rem 0;
      p {
        font-size: 14px;
        color: #fff;
        margin-bottom: 0;
      }
    }
  }
`;
