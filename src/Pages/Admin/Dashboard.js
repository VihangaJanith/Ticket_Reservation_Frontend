import React from "react";
import { useState, useEffect } from "react";
function AdminHome() {

    const [name, setName] = useState("");

    useEffect (() => {
        const userType = localStorage.getItem('userType');
        if (userType == '1') {
            setName('Traveler Agent')
        }
        else {
            setName('Backoffice Agent')
        }
    }, [])

  return (
    <div>
     

      <div
        style={{
          backgroundColor: "hsla(90, 100%, 89%, 0.55)",
        }}
      >
        <div id="bodyadd">
          <div className="infoadmin">
            <div>
              <div class="container">
                <div
                  class="row"
                  style={{
                    backgroundImage:
                      "url('https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/take-a-ride-in-the-toy-train-1653978188_8ac904b5bdb228abad78.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",

                  }}
                >
                  <div class="col-lg-10 col-xl-auto mx-auto">
                    <div
                      class="card flex-row my-3 border-5 shadow rounded-5 overflow-hidden"
                      style={{ backgroundColor: "hsla(90, 0%, 100%, 0.7)" }}
                    >
                      <div class="card-img-left d-none d-md-flex"></div>
                      <div class="card-body p-4 p-sm-5">
                        <center>
                          {" "}
                          <h1>{name} DashBord</h1>
                        </center>
                        <hr class="my-4" />

                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/get"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-user mr-2"
                                  aria-hidden="true"
                                ></i>{" "}
                                Traveler accounts Management{" "}
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/travelpackages/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-car mr-2"
                                  aria-hidden="true"
                                ></i>
                                Train Management
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/adminhotelpackage"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-hotel mr-2"
                                  aria-hidden="true"
                                ></i>
                                Hotel Package
                              </a>
                            </button>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/activities"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-swimmer mr-2"
                                  aria-hidden="true"
                                ></i>
                                Activity
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/equipment/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-campground mr-2"
                                  aria-hidden="true"
                                ></i>
                                Equipment
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/guide"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-user mr-2"
                                  aria-hidden="true"
                                ></i>
                                Guide Management
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/payment"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-cc-visa mr-2"
                                  aria-hidden="true"
                                ></i>
                                Payment
                              </a>
                            </button>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/feedbacks/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i
                                  class="fa fa-comments mr-2"
                                  aria-hidden="true"
                                ></i>
                                FeedBack Messages
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/contactus/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-envelope mr-2"
                                  aria-hidden="true"
                                ></i>
                                Contact Us Messages
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/adView"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i
                                  class="fa fa-inbox mr-2"
                                  aria-hidden="true"
                                ></i>
                                Inquiry
                              </a>
                            </button>
                          </div>
                        </div>
                        <hr class="my-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;