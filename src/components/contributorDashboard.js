import React from "react";
import { nav } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import "../dashboard.css";


function AsideNav(props) {
  
  const { setAuthTokens } = useAuth();
  function logOut() {

    setAuthTokens();
    return <Redirect push to={{pathname:"/login"}}/>;
  }
  
  return (
    <nav className="asideNav col-3 px-5 pt-3" style={{ background: "#344127" }}>
      <div className="container text-left">
        <a className="h2 text-white Aside-title" href="/">
          <img src="images/onboard_menu_icon.svg" alt="" /> Open Data
        </a>

        <ul className="navbar-nav mt-5 ">
          <li className="nav-item active">
             <Link to="/dashboard" className="nav-link h4">
              <i className="fas fa-home mr-2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
             <Link to="/dashboard/stats" className="nav-link h4">
              <i className="fas fa-chart-line mr-2"></i> Stats
            </Link>
          </li>
          <li className="nav-item">
             <Link to="/dashboard/information"className="nav-link h4">
              <i className="fas fa-info-circle mr-2"></i> Information
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/uploads" className="nav-link h4">
              <i className="fas fa-cloud-upload-alt mr-2"></i> Uploads
            </Link>
          </li>
          <li className="nav-item">
             <Link to="/dashboard/contactus" className="nav-link h4">
              <i className="far fa-comment-alt mr-2"></i> Contact Us
            </Link>
          </li>

          <li className="nav-item">
             <div>
     
        <input type ="button" onClick={logOut} value ="Log out" />
             </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Container() {
  return (
    <main class="col-9">
      <div class="container">
        <header class="container d-flex justify-content-between px-0 pt-3">
          <div>
            <Link class="nav-left nav-link text-white" to ="/dashboard/uploads">
              <i class="fas fa-upload mr-2"></i>Upload Dataset
            </Link>
          </div>
          <ul class="nav-right d-flex navbar-nav flex-row">
            <li class="nav-item px-3">
              <i class="far fa-bell"></i> 2
            </li>
            <li>
              <a
                className="border-dark btn btn-outline-light text-dark px-4 py-0"
                href="/"
              >
                Level 1
              </a>
            </li>

            <li class="nav-item px-3">
              <a href="/" class="nav-link py-0">
                <img
                  class="img-fluid rounded-circle"
                  width="20"
                  height="10"
                  alt =" "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRMdVmNPFIXw0viVx_1ikpgYWNaEvKVPdKcg&usqp=CAU"/>

            <li class="nav-item pl-3 pr-1">
              <a href="/" class="nav-link text-dark py-0">
                <img
                  class="img-fluid rounded-circle pr-2"
                  width="30"
                  height="30"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUwjB_JQ42cHVQHw6eWFp882_4okQmwCJxPA&usqp=CAU"

                  alt=""
                />
                Johnvibe104
              </a>
            </li>


            <li class="dropdown show nav-item px-3">
              <a
                class="dropdown-toggle"
                href="/"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >action</a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="/">
                  Action
                </a>
                <a class="dropdown-item" href="/">
                  Another action
                </a>
                <a class="dropdown-item" href="/">
                  Something else here
                </a>

            <li class="nav-item pr-3">
              <div class="dropdown mr-1">
                <button
                  type="button"
                  class="dropdown-toggle border-0 bg-transparent"
                  id="dropdownMenuOffset"
                  data-toggle="dropdown"
                  data-offset="10,20"
                >
                  
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  <a class="dropdown-item" href="/">
                    Log in
                  </a>
                  <a class="dropdown-item" href="/">
                    Sign Up
                  </a>
                </div>

              </div>
            </li>
          </div> </li></a> </li></ul>
        </header>
        <section class="mt-5">
          <div class="card" style={{ background: "#344127" }}>
            <div class="card-body text-white">
              <h5 class="font-weight-normal">
                Welcome John Vibe <br />
                <br />
                We are glad to have you as a contributor to Open Data for Africa
                , an open source project aimed to provide data to improve
                Africa’s growing technology revolution.
                <br />
                <br />
                If you have any abouts how to upload your first dataset,
                <a class="d-inline btn_ClickHere" href="/">
                  click here.
                </a>
              </h5>
            </div>
          </div>
        </section>
        <section class="mt-5 text-white OdaSection">
          <h1 style={{ color: "#344127" }}>Trending Categories</h1>
          <h5 class="py-2" style={{ color: "#344127" }}>
            Our recommendations of datasets that are getting most searches...
          </h5>

          <div
            id="recipeCarousel"
            class="carousel slide w-100"
            data-ride="carousel"
          >
            <div class="carousel-inner w-100" role="listbox">
              <div class="carousel-item row no-gutters active">
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/Doctor-amico.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">
                        Health Care
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/Farmer-amico.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">
                        Agriculture
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/House_searching-bro.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">Housing</h5>
                    </div>
                  </div>
                </div>
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/Farmer-amico.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">
                        Agriculture
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item row no-gutters">
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/Doctor-amico.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">
                        Health Care
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/House_searching-bro.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">Housing</h5>
                    </div>
                  </div>
                </div>
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/Farmer-amico.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">
                        Agriculture
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3 float-left">
                  <div class="card mb-2 mx-3">
                    <div class="card-body">
                      <img
                        src="images/dashboard-svg/House_searching-bro.svg"
                        alt=""
                        class="card-img-top"
                      />
                      <h5 class="card-title text-white text-center">Housing</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#recipeCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#recipeCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>

        <section class="my-5">
          <h1 style={{ color: "#344127" }}>ODA Digest</h1>
          <div
            class="card py-5 mt-5"
            style={{
              background:
                "linear-gradient(178.18deg,rgba(249, 212, 142, 0.9) -13.56%,rgba(52, 65, 39, 0.9) -13.56%,rgba(249, 212, 142, 0.9) 158.3%)",
            }}
          >
            <div class="card-body text-white text-center">
              <h5 class="h4">
                We have decided to share our stories to the world , join us on
                June 01 2020 as we launch the converse conversation with Joe
                Rogan and peter Thiel.
              </h5>
              <button
                type="button"
                class="btn btn-outline-light mt-3 text-white"
                style={{ fontSize: "25px" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Uploads(){

  return (
    <main class="col-9">
      <div class="container">
        <section class="mt-5">
          <div class="card" style={{ background: "#344127" }}>
          <div class="card-body text-white">
        <div>Upload</div>
         </div> </div></section>
      </div>
    </main>
    );
}
function Stats(){

  return (
    <main class="col-9">
      <div class="container">
         <section class="mt-5">
          <div class="card" style={{ background: "#344127" }}>
          <div class="card-body text-white">
        <div>Stats</div> 

        </div></div>
        </section>
      </div>
    </main>
    );
}
function Information(){

  return (
    <main class="col-9">
      <div class="container">
        <section class="mt-5">
          <div class="card" style={{ background: "#344127" }}>
          <div class="card-body text-white">
          <div>Information</div> 

              </div></div>
          </section>
      </div>
    </main>
    );
}
function ContactUs(){

  return (
    <main class="col-9">
      <div class="container">
       <section class="mt-5">
          <div class="card" style={{ background: "#344127" }}>
          <div class="card-body text-white">
           <div>Contact Us</div> 

           </div></div>

           </section>
      </div>
    </main>
    );
}
function Dashboard(props) {
    
  return (
    <div className="row">
    <Router>

      <AsideNav />
      <Switch>
      <Route exact path ="/dashboard/">
      <Container />
      </Route>
       <Route exact path ="/dashboard/stats">
      <Stats/>
      </Route>
      <Route exact path ="/dashboard/uploads">
      <Uploads/>
      </Route>
      <Route exact path ="/dashboard/contactus">
      <ContactUs/>
      </Route>
      <Route exact path ="/dashboard/information">
      <Information/>
       </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
