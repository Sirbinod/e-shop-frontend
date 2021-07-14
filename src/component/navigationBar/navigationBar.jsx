import React from "react";
import {Button, Form, Navbar, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {BiSearch} from "react-icons/bi";
import {MdFavoriteBorder} from "react-icons/md";
import {BiCart} from "react-icons/bi";
import {BsList} from "react-icons/bs";
import {useEffect} from "react";

const NavigationBar = () => {
  // show category manu and hide scrolly
  // const handleScroll = () => {
  //   const selector = document.querySelector(".custom-btn");
  //   if (window.scrollY > 280) {
  //     return selector && selector.classList
  //       ? selector.classList.add("show")
  //       : null;
  //   } else {
  //     return selector && selector.classList
  //       ? selector.classList.remove("show")
  //       : null;
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  const Category = [
    {title: "ELectronic Devices"},
    {title: "Health & Beauty"},
    {title: "Babies & Toys"},
    {title: "Grocies & Pets"},
    {title: "Sport & Lifestyle"},
    {title: "Watches & Bags"},
  ];
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="info">
            <a>Store Location</a>
            <a>Customer Care</a>
            <a>Track Order</a>
            <a>Login</a>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="middle-contain">
            <div className="logo">
              <h2>E-Commerce</h2>
            </div>
            <Form className="inline-form">
              <input
                className="form-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              ></input>
              <Button className="search-btn" type="submit">
                <BiSearch />
              </Button>
            </Form>
            <div className="group-cart">
              <div className="icons">
                <MdFavoriteBorder />
              </div>
              <div className="icons">
                <BiCart />
              </div>
              <div className="price-cart">
                <span className="price-title">My Cart</span>
                <span className="price">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <Navbar expand="lg" className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="dropdown custom-btn">
                <button
                  className="btn button-custom dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="true"
                >
                  <BsList className="category-icon" />
                  All Category
                </button>

                <ul
                  className="dropdown-menu custom-btn"
                  aria-labelledby="dropdownMenuButton"
                >
                  {Category.map((data) => (
                    <li key={data.title}>
                      <a className="dropdown-item" href="#">
                        {data.title}
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Child Menu 1
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Child Menu 2
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Child Menu 3
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <Nav className="nav-contain">
                <Nav.Link href="#home">E-Mart</Nav.Link>
                <Nav.Link href="#link">E-Mall</Nav.Link>
                <Nav.Link href="#link">Vouchers</Nav.Link>
                <Nav.Link href="#link">Gift Cards</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="small-form">
              <input
                className="form-control small-d-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              ></input>
              <Button className="search-btn small-d-search" type="submit">
                <BiSearch />
              </Button>
            </Form>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
