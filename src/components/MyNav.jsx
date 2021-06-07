import React from "react";
import { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./MyNav.css";
import avatar from "../assets/avatar.png";
import netflix from "../assets/netflix_logo.png";
import kids from "../assets/kids_icon.png";

class MyNav extends Component {

  render() {
    return (
      <Navbar className="navbar navbar-expand-lg bg-Color" variant="dark">
        <a href="home.html">
          <img src={netflix} alt="logo" className="navbarLogo" />
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
          <li className="nav-item">
            <a className="nav-link" href="home.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              MyList
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Form
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center" />
        <a
          className="nav-link disabled"
          href="/"
          tabIndex="-1"
          aria-disabled="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
        <a href="/">
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

        
          <div className="nav-item dropdown justify-content-end ml-auto nav-link">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={avatar} alt="" className="avatar" />
            </a>

            <div
              className="dropdown-menu userDropdown"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item p-0 addUser" href="profile.html" style={{ textDecoration: "none" }}>
                  Profile
                <img className="kidsIcon ml-5" src={kids} alt="kidsIcon" />
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
   
      </Navbar>
    );
  }
}

export default MyNav;
