import styled from "styled-components";
import bg from "../bg1.png";

const Wrapper = styled.section`
  background: url(${bg});
  background-size: cover;
  background-position: 20%;
  margin: -11rem 1rem 0 1rem;
  padding: 3rem 22px;
  border-radius: 8px;
  color: #fff;

  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 32px;
  }
  p {
    color: #fff;
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 18px;
  }
  button {
    border-radius: 100px;
    padding: 20px 30px;
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    background: var(--pink);
    border: none;
    color: var(--white);
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    margin: -5rem 4rem 0 4rem;
    padding: 3rem 72px;
    padding: 5rem 72px;
    background-size: 100%;
    background-position: 100%;

    h1 {
      font-size: 50px;
    }
  }
`;
export default Wrapper;
