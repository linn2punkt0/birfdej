import React, { useState } from "react";
import styled from "styled-components";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "./App.css";
import HAK from "./images/HAK.png";
import Norda from "./images/norda.png";
import Tranquilo from "./images/tranquilo.png";
import Alberts from "./images/alberts.png";

const StyledApp = styled.div`
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(
    170.88deg,
    #222937 2.48%,
    #242b39 34.99%,
    #293447 50.16%,
    #313e55 75.9%
  );
  text-align: center;
  color: white;

  h3,
  h4 {
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    margin: 0;
  }

  .gbg {
    padding: 15px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  .local {
    padding: 60px 30px 40px 30px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-bottom: 10px;
    }
  }
`;

const Hero = styled.div`
  position: relative;
  h1 {
    margin: 0;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
    font-family: "Parisienne", cursive;
    font-size: 65px;
    font-weight: normal;
    overflow: visible;
  }

  .gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      237.49deg,
      rgba(0, 0, 0, 0.97) -1.05%,
      rgba(0, 0, 0, 0) 62.36%
    );
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .gif {
    width: 100%;
    height: auto;
  }
`;

const Gift = styled.div`
  h2 {
    font-family: "Parisienne", cursive;
    font-size: 58px;
    font-weight: normal;
    margin: 35px 0 0 0;
  }

  & > h3 {
    margin: 0 0 70px 0;
  }

  .shine {
    position: relative;
    overflow: hidden;
    background: linear-gradient(-45deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 30%;
    animation: animate 3s linear infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.8);
  }

  @-webkit-keyframes animate {
    0% {
      background-position: -300%;
    }
    100% {
      background-position: 300%;
    }
  }
  @keyframes animate {
    0% {
      background-position: -300%;
    }
    100% {
      background-position: 300%;
    }
  }
`;

const Restaurant = styled.div`
  padding: 25px;
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

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: linear-gradient(
    170.88deg,
    #222937 2.48%,
    #242b39 34.99%,
    #293447 50.16%,
    #313e55 75.9%
  );
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  .loader {
    color: #ffffff;
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const { width, height } = useWindowSize();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledApp>
      <LoadingOverlay show={!imageLoaded}>
        <div className="loader"></div>
      </LoadingOverlay>

      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        tweenDuration={10000}
        colors={["#aaa9ad", "#fff", "#bec2cb", "#f9f9f9"]}
        gravity={0.1}
        initialVelocityY={-10}
        recycle={false}
        run={imageLoaded}
      />
      <Hero>
        <h1>Grattis!</h1>
        <div className="gradient"></div>

        <img
          src="https://media.giphy.com/media/BMBMMfVxZ2lOM/giphy.gif"
          alt="gif"
          className="gif"
          onLoad={() => setImageLoaded(true)}
        />
      </Hero>

      <main>
        <Gift>
          <h2 className="shine">1000kr</h2>
          <h3>på valfri restaurang</h3>
        </Gift>
        <h3>Våra förslag:</h3>
        <div className="gbg">
          <Restaurant imageWidth="170px">
            <a href="https://nordarestaurant.com/sv/goteborg/">
              <img src={Norda} alt="norda" />
            </a>
          </Restaurant>
          <Restaurant imageWidth="150px">
            <a href="https://tranquilo.se/">
              <img src={Tranquilo} alt="tranquilo" />
            </a>
          </Restaurant>
          <Restaurant imageWidth="80px">
            <a href="http://www.restauranghak.se/">
              <img src={HAK} alt="hak" />
            </a>
          </Restaurant>
        </div>

        <div className="local">
          <h3>
            Vill du äta gott på närmare håll? Varför inte Fredagsmys på Alberts?
          </h3>
          <Restaurant imageWidth="170px">
            <a href="https://www.alberthotell.com/sv/fredagsmys-30">
              <img src={Alberts} alt="alberts" />
            </a>
          </Restaurant>
        </div>
      </main>
    </StyledApp>
  );
}

export default App;
