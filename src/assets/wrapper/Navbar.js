import styled from "styled-components";

const Wrapper = styled.section`
position: fixed;
top:0;
width:100%;
  .nav-menu {
    display: flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin-bottom: 8rem;
    position: fixed;
    background: var(--white);
    svg {
      font-size: 1.5rem;
    }
  }
  section {
    display: none;
  }
  nav {
    position: fixed;
    width: 100%;
    background: var(--white);
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    margin: 0 auto;
    align-items: center;
    // max-width: 135rem;
    .bar {
      font-size: 2rem;
    }
  }
  .logo {
    width: 50px;
  }
  @media screen and (min-width: 992px) {
    section{
        display:block
    }
    .nav-menu {
      display: none;
    }
    .logo {
      width: 80px;
    }
    nav {
      display: grid;
      padding: 1rem 3.5rem;
      grid-template-columns: auto auto 1fr auto auto auto;
      gap: 2.5rem;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      .bar {
        display: none;
      }
    }
    .nav-container {
      width: 100%;
      margin: 0 auto;
      display: flex;
      background-color: var(--white);
      margin-top: 2rem;
      justify-content:space-between;
      border-bottom: 1px solid #e2e8f0;
      padding: 0.5rem 72px;
    }
    .nav-left {
      display: flex;
      gap: 1rem;
    }
    .text {
      color: var(--Neutral400);
      font-weight: 400;
      font-size: 14px;
    }
    p {
      color: var(--Neutral400);
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 0;
    }
    .nav-right {
      display: flex;
      gap: 1rem;
    }

    .location {
      box-shadow: 4px 4px 10px 0px #0000000d;
      padding: 1rem 2rem;
      display: flex;
      justify-content: center;
      gap: 3.5rem;
      align-items: center;
      span {
        color: var(---Neutral400);
        font-size: 14px;
        font-weight: 400;
        text-transform: capitalize;
        margin-bottom: 0.6rem;
      }
      p {
        color: var(--pink);
        font-size: 16px;
      }
    }
    img {
      width: 6rem;
    }
    svg {
      font-size: 1rem;
      font-weight: 800;
      color: #000;
    }
    .search-container {
      background: var(--Neutral100);
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-radius: 5px;
      input {
        background: var(--Neutral100);
        color: var(--Neutral500);
        border: none;
        width: 100%;
        height: 3rem;
      }
      input::placeholder {
        color: var(--Neutral500);
        font-size: 16px;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      img {
        width: 2.5rem;
      }
      p {
        font-size: 16px;
        color: var(--black);
        font-weight: 600;
      }
      svg {
        font-weight: 900;
      }
    }
    .last-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      .cart {
        position: relative;
        span {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--pink);
          color: var(--white);
          font-size: 12px;
          padding: 0.1rem 0.4rem;
          border-radius: 100%;
        }
      }
      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
export default Wrapper;
