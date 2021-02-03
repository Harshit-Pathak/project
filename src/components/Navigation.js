import React from "react";
import "./navigation.css";
import {
  Button,
  Navbar,
  Form,
  NavDropdown,
  Nav,
  FormControl,
} from "react-bootstrap";

function Navigation() {
  return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">DS and ALGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
            >
              Data Structures
            </a>
            <ul
              className="dropdown-menu"
              area-labelledby="navbarDropdownMenuLink"
            >
              <li className="dropdown-submenu">
                <a
                  className="dropdown-item dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Non Linear
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Trees
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a className="dropdown-item" href="#">
                      Graphs
                    </a>
                  </li>
                </ul>
              </li>
              <div className="dropdown-divider"></div>

              <li className="dropdown-submenu">
                <a
                  className="dropdown-item dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Linear
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Arrays
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a className="dropdown-item" href="#">
                      Linked Lists
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a className="dropdown-item" href="#">
                      Stack
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>

                  <li>
                    <a className="dropdown-item" href="#">
                      Queues
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
    
    <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit" className="btn btn-info">Submit</Button>
        </Form>
        <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
        </li>
        
        <li class="nav-item">
        <a class="nav-link" href="#">Sign Up</a>
        </li>

    </ul>
  </div>
</nav>
  );
}

export default Navigation;