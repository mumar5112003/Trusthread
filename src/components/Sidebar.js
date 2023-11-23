import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div class="d-grid gap-2 col-12 mx-auto">
            <div
              style={{
                height: "10vh",
                width: "80%",
                marginBottom: "20px", // Added margin
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <button
                class="btn btn-primary col-12 btn-dark btn-lg"
                type="button"
                style={{color : "#FFDE59"}}
              >
                <Link to="/Admin" style={{  textDecoration :"none"}}>
                    <span style={{color: "#FFDE59" ,}}>Home</span>
                  </Link>
              </button>
            </div>
            <div
              style={{
                height: "10vh",
                width: "80%",
                marginBottom: "20px", // Added margin
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                class="btn btn-primary col-12 btn-dark btn-lg"
                type="button"
                style={{color : "#FFDE59"}}
              >
                
                <Link to="/edit" style={{  textDecoration :"none"}}>
                    <span style={{color: "#FFDE59" ,}}>Edit Description</span>
                  </Link>
              </button>
            </div>
            <div
              style={{
                height: "10vh",
                width: "80%",
                marginBottom: "20px", // Added margin
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                class="btn btn-primary col-12 btn-dark btn-lg"
                type="button"
                style={{color : "#FFDE59"}}
              >
                Recent Review
              </button>
            </div>
            <div
              style={{
                height: "10vh",
                width: "80%",
                marginBottom: "20px", // Added margin
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                class="btn btn-primary col-12 btn-dark btn-lg"
                type="button"
                style={{color : "#FFDE59"}}
              >
                <Link to="/test" style={{  textDecoration :"none"}}>
                    <span style={{color: "#FFDE59" ,}}>Preview</span>
                  </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

{
  /*  */
}
{
  /* <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>My App</header>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-qrcode"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-link"></i>Shortcuts
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-stream"></i>Overview
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-week"></i>Events
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-question-circle"></i>About
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sliders-h"></i>Services
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-envelope"></i>Contact
            </a>
          </li>
        </ul>
      </div>
      <section></section>
    </div> */
}
