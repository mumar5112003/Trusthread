import "./style.css";
import cad from "../Img/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src={cad} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link !active" aria-current="page" href="/">
                  <Link to="" style={{ color: "black" , textDecoration :"none"}}>
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link !active" href="/">
                  <Link to="/test" style={{ color: "black" , textDecoration :"none"}}>
                    Play Ground
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link !active" href="/">
                  <Link to="/contact" style={{ color: "black" , textDecoration :"none"}}>
                    Contact us!
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link !active" href="/">
                  <Link to="/signin" style={{ color: "black" , textDecoration :"none"}}>
                    Signin /Signup
                  </Link>
                </a>
              </li>
              {/* 
              <li className="nav-item dropdown dos">
                <a
                  className="nav-link dropdown-toggle disabled"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Menu
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <Link to="/Admin" style={{ color: "black" , textDecoration :"none"}}>
                    Admin Dash
                  </Link>
                </a>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              action="https://google.com/search"
            >
              <input
                className="form-control me-2"
                type="text"
                name="q"
                placeholder="Search on Google"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                <span style={{color : "#FFDE59"}}>Google?</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
