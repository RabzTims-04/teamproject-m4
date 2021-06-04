import React from "react";
import { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./MyNav.css";

class MyNav extends Component {
  state = {};
  render() {
    return (
      <Navbar className="navbar navbar-expand-lg bg-Color">
        <a href="home.html">
          <img src="../assets/avatar.png" alt="logo" className="navbarLogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" />
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link active" href="home.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MyList
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./backoffice.html">
              Form
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center" />
        <a
          className="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bell-fill bell  align-items-center px-30"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </a>

        <a href="#">
          <div className="nav-item dropdown justify-content-end ml-auto nav-link">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="#" alt="" className="avatar" />
            </a>

            <div
              className="dropdown-menu userDropdown"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item p-0" href="#">
                <a
                  href="profile.html"
                  className="addUser"
                  style={{ textDecoration: "none" }}
                >
                  Profile
                </a>
                <img className="kidsIcon ml-5" src="#" alt="kidsIcon" />
              </a>
              <br />
              <a
                style={{ textDecoration: "none" }}
                className="addUser"
                href="account.html"
              >
                Account
              </a>
            </div>
          </div>
        </a>
      </Navbar>
    );
  }
}

export default MyNav;
