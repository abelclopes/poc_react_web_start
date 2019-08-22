import React from "react";
import HomeCards from "./cards";
import HomeCarousel from "./carousel";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <HomeCarousel/>
      <Container>
        <HomeCards/>
      </Container>
    </div>
  );
}
