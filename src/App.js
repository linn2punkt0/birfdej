import React from "react";
import styled from "styled-components";
import "./App.css";
import HAK from "./images/HAK.png";
import Norda from "./images/norda.png";
import Tranquilo from "./images/tranquilo.png";
import Alberts from "./images/alberts.webp";

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: #6d9091;
  text-align: center;
  padding: 20px;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 0;
  }
`;

const Restaurant = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: white;
  border-radius: 15px; */

  & > a {
    text-decoration: none;

    img {
      width: ${({ imageWidth }) => imageWidth || "200px"};
    }
  }
`;

function App() {
  return (
    <StyledApp>
      <h1>Grattis!</h1>

      <img src="" />

      <h2>1000kr på valfri restaurang</h2>
      <h3>Vi föreslår:</h3>
      <div>
        <Restaurant imageWidth="170px">
          <a href="https://nordarestaurant.com/sv/goteborg/">
            <img src={Norda} alt="norda" />
          </a>
        </Restaurant>
        <Restaurant imageWidth="170px">
          <a href="https://tranquilo.se/">
            <img src={Tranquilo} alt="tranquilo" />
          </a>
        </Restaurant>
        <Restaurant imageWidth="90px">
          <a href="http://www.restauranghak.se/">
            <img src={HAK} alt="hak" />
          </a>
        </Restaurant>
      </div>

      <h3>
        Vill du äta gott på närmare håll? Varför inte Fredagsmys på Alberts?
      </h3>
      <Restaurant imageWidth="170px">
        <a href="https://www.alberthotell.com/sv/fredagsmys-30">
          <img src={Alberts} alt="alberts" />
        </a>
      </Restaurant>
    </StyledApp>
  );
}

export default App;
