import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

function Aboutsection(props) {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button> Contact Us!</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with camera" />
      </Image>
    </About>
  );
}

const About = styled.div`
min-height:90vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:5 rem 10 rem;
color:white;
`

const Description = styled.div`
flex:1;
padding-right:5rem;
h2{
  font-weight:lighter;
}
`
const Image = styled.div`
flex:1;
width:100%;
`

export default Aboutsection;
