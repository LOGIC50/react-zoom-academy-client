import React from "react";
import { Link, NavLink as a } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgb(24, 43, 73)" }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link class="navbar-brand" to="/home">
              ZOOM ACADEMY
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/registration">
                      Registration
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/contact">
                      Contact US
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/faq">
                      Faq
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/instructors">
                  Instructors
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              {user?.email ? (
                <ul class="navbar-nav  mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" to="/home">
                      <button className="button-8" onClick={logout}>
                        Logout
                      </button>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    style={{ color: "white", paddingTop: "10px" }}
                  >
                    Welcome: {user?.displayName}
                  </li>
                </ul>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    <button>Login</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
