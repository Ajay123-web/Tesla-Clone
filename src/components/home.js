import React from "react";
import styled from "styled-components";
import Section from "./section";
//declaring container
const Container = styled.div`
  height: 100vh;
`;
//name of a react function must start with a capital letter
export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless delivery"
        backgroundImg="/images/model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless delivery"
        backgroundImg="/images/model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless delivery"
        backgroundImg="/images/model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless delivery"
        backgroundImg="/images/model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money back guarantee"
        backgroundImg="/images/solar-panel.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Solar for new roofs"
        description="Solar Roof Costs Less than New Roof"
        backgroundImg="/images/solar-roof.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        leftBtnTxt="Shop Now"
      />
    </Container>
  );
}
