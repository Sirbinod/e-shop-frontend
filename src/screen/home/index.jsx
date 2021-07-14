import React from "react";
import NavigationBar from "../../component/navigationBar/navigationBar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Card, Row, Col, Button} from "react-bootstrap";

import Flashcard from "../../component/flashcard/flashcard";
import Lergebanner from "../../component/banner/lergebanner";
import SpecialProduct from "../../component/specialProduct/specialProduct";
import Justforyou from "../../component/justforyou/justforyou";
import {FiTruck} from "react-icons/fi";
import {MdPayment} from "react-icons/md";
import {TiMessages} from "react-icons/ti";
import {GiThreeFriends} from "react-icons/gi";
import Footer from "../../component/footer/footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {productFetch} from "../../store/action/product";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 7,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 5,
  },
  tablet: {
    breakpoint: {max: 1024, min: 580},
    items: 3,
  },
  mobile: {
    breakpoint: {max: 580, min: 0},
    items: 2,
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const {product, loading} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(productFetch());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavigationBar />
          <section className="banner-section">
            <div className="container">
              <Row>
                <Col>
                  <Lergebanner />
                </Col>
              </Row>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="flash-deal">
                <div className="flash-title">
                  <h3>Flesh Deal</h3>
                </div>
                <div className="flash-countdown">
                  <h5 className="countdown-title">Hurry Up! Offer ends in:</h5>
                  <div className="countdown-time">
                    <div className="time">
                      <span className="number">10</span>
                      <span className="text">hour</span>
                    </div>
                    <div className="time">
                      <span className="number">10</span>
                      <span className="text">min</span>
                    </div>
                    <div className="time">
                      <span className="number">10</span>
                      <span className="text">sec</span>
                    </div>
                  </div>
                </div>
              </div>
              <Carousel responsive={responsive}>
                {product.map((data) => (
                  <Flashcard data={data} />
                ))}
              </Carousel>
            </div>
          </section>
          <section className="special-section">
            <div className="container">
              <div className="special-product">
                <div className="special-product-title">
                  <h3>Special Product</h3>
                </div>
                <Button className="show-more">Show More</Button>
              </div>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <SpecialProduct />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SpecialProduct />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SpecialProduct />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <SpecialProduct />
                </Col>
              </Row>
            </div>
          </section>
          <section>
            <div className="container">
              <Row className="banar">
                <Col xs={12} lg={6}>
                  <Card className=" bg-dark text-white ">
                    {/* <Card.Img
                  className="addss-image"
                  src="https://images.ctfassets.net/hrltx12pl8hq/6TOyJZTDnuutGpSMYcFlfZ/4dfab047c1d94bbefb0f9325c54e08a2/01-nature_668593321.jpg?fit=fill&w=480&h=270"
                  alt="Card image"
                /> */}
                    <Card.ImgOverlay>
                      <Card.Title>Ads Card</Card.Title>
                      <Card.Text>This is Ad place</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col xs={12} lg={6}>
                  <Card className="bg-dark text-white">
                    {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                    <Card.ImgOverlay>
                      <Card.Title>Card Ads</Card.Title>
                      <Card.Text>This is Ad place</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="just-for-you">
                <h1>Just For You</h1>
              </div>
              <Row>
                {product.map((data) => (
                  <Col className="grid-col" md={2.5}>
                    <Justforyou data={data} />
                  </Col>
                ))}
              </Row>
            </div>
          </section>
          <section className="info-section">
            <div className="container">
              <Row>
                <Col>
                  <div className="info-card">
                    <div className="info-logo">
                      <FiTruck />
                    </div>
                    <div className="info-body">
                      <span className="info-body-h">Free Delivery</span>
                      <span className="info-body-p">
                        For all orders over $120
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="info-card">
                    <div className="info-logo">
                      <TiMessages />
                    </div>
                    <div className="info-body">
                      <span className="info-body-h">24/7 HELP CENTER</span>
                      <span className="info-body-p">
                        Dedicated 24/7 support
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="info-card">
                    <div className="info-logo">
                      <MdPayment />
                    </div>
                    <div className="info-body">
                      <span className="info-body-h">SAFE PAYMENT</span>
                      <span className="info-body-p">100% secure payment</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="info-card">
                    <div className="info-logo">
                      <GiThreeFriends />
                    </div>
                    <div className="info-body">
                      <span className="info-body-h">FRIENDLY SERVICES</span>
                      <span className="info-body-p">
                        30 days you are satisfied
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section>
            <Footer />
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
