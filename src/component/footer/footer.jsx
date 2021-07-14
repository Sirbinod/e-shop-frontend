import React from "react";
import {Row, Col, Form, Button} from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <Row>
          <Col>
            <div className="footer-contain">
              <h5>Help & Customer Care</h5>
              <ul className="ul-list">
                <li className="li-list">New Customers</li>
                <li className="li-list">How to use My Account</li>
                <li className="li-list">Placing an Order</li>
                <li className="li-list">Placing an Order</li>
                <li className="li-list">Payment Methods</li>
                <li className="li-list">Problems with your Order</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-contain">
              <h5>My Account</h5>
              <ul className="ul-list">
                <li className="li-list">Product Support</li>
                <li className="li-list">Checkout</li>
                <li className="li-list">Shoping Cart</li>
                <li className="li-list">Wishlist</li>
                <li className="li-list">Custom Link</li>
                <li className="li-list">Redeem Voucher</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-contain">
              <h5>Cutomer Service</h5>
              <ul className="ul-list">
                <li className="li-list">Help Center</li>
                <li className="li-list">Contact Us</li>
                <li className="li-list">Report Abuse</li>
                <li className="li-list">Submit a Dispute</li>
                <li className="li-list">Policies & Rules</li>
                <li className="li-list">Online Returns Policy</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-contain">
              <h5>Sign Up To Newsletter</h5>
              <p className="custom-text">
                Join 60.000+ subscribers and get a new discount coupon on every
                Saturday.
              </p>
              <Form className="inline-form custom-form">
                <input
                  className="form-control custom-control"
                  type="search"
                  placeholder="Subsribe..."
                  aria-label="Search"
                ></input>
                <Button className="search-btn custom-searech" type="submit">
                  SUBSCRIBE
                </Button>
              </Form>
              <p className="custom-text">
                By providing your email address, you agree to ourPrivacy Policy
                and Terms of Service.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
