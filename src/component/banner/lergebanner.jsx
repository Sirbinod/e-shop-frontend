import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Jumbotron, Button, Row, Col} from "react-bootstrap";

const Lergebanner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <Jumbotron className="banner">
          <h1>Hello, world!</h1>

          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <Button className="banner-button" variant="primary">
            Shop Now
          </Button>
        </Jumbotron>
        <Jumbotron className="banner">
          <h1>Hello, world!</h1>

          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>

          <Button variant="primary">Shop Now</Button>
        </Jumbotron>
        <Jumbotron className="banner">
          <h1>Hello, world!</h1>

          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Shop Now</Button>
          </p>
        </Jumbotron>
      </Carousel>
    </div>
  );
};

export default Lergebanner;
