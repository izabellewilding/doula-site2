import React from "react";
import { Link } from "gatsby";
import logo from "../icons/doula-logo.svg";
import facebook from "../icons/social/facebook.svg";
import instagram from "../icons/social/instagram.svg";
import email from "../icons/email-darkRed.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        id="nav"
        className={`"navbar is-v-centered  w-full box-shadow-light fixed-desktop  ${this.state.navBarActiveClass}"`}
      >
        <div className="navbar-brand  is-v-centered">
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
            style={{ marginLeft: 0 }}
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
          <Link to="/" className="nav-logo " title="Logo">
            <img
              src={logo}
              alt="Chantal Baptiste Doula Logo"
              style={{ width: "110px", padding: "1rem" }}
            />
          </Link>

          <div className="navbar-start" style={{ display: "flex" }}>
            <div
              id="navMenu"
              aria-label="navigation menu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
              style={{
                boxShadow: "none",
                width: "100%",
                fontFamily: "quicksand",
                textTransform: "uppercase",

                // fontWeight: "bold"
              }}
            >
              {" "}
              <Link
                className="navbar-item custom-underline"
                to="/"
                ari-label="home link"
                activeStyle={{ color: "#008080" }}
              >
                About Me
              </Link>
              <Link
                className="navbar-item custom-underline"
                to="/services"
                activeStyle={{ color: "#008080" }}
              >
                Services
              </Link>
              <Link
                className="navbar-item custom-underline"
                to="/resources"
                activeStyle={{ color: "#008080" }}
              >
                Useful Resources
              </Link>
              <Link
                className="navbar-item custom-underline"
                to="/contact"
                activeStyle={{ color: "#008080" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end is-v-centered is-flex">
          <a
            href="https://www.facebook.com/chantalbaptistedoula"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1.25em", height: "1.25em" }}
            />
          </a>

          <a
            href="https://www.instagram.com/iamchantalbaptiste/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1.25em", height: "1.25em" }}
            />
          </a>
          <Link to="/contact" className="social">
            <img
              src={email}
              alt="email"
              style={{ width: "1.25em", height: "1.25em" }}
            />
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
