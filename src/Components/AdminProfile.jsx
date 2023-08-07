import React, { useState } from "react";
import "./AdminProfile.css";

function AdminProfile({ open, setOpen }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [profileFor, setProfileFor] = useState("Bride");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions you want with the form data
    console.log("Submitted data:", { name, mobile, password, profileFor });
  };

  // console.log(true);
  return (
    <>
      {open ? (
        <div
          style={{ display: "block" }}
          className="modal "
          id="register"
          aria-hidden="true"
          aria-labelledby="register-pop"
          tabIndex="-1">
          <div className="backgroundattatched" >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="register-pop">
                    Let's set up your account, Register Free!
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setOpen(false)}
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile* / Email address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="password" className="form-label">
                          OTP / Password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="clearfix">
                          <label className="form-label">Profile for</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            // className="form-check-input"
                            type="radio"
                            name="matchFor"
                            id="Bride"
                            value="Bride"
                            checked={profileFor === "Bride"}
                            onChange={() => setProfileFor("Bride")}
                          />
                          <label className="form-check-label" htmlFor="Bride">
                            Bride
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            // className="form-check-input"
                            type="radio"
                            name="matchFor"
                            id="Groom"
                            value="Groom"
                            checked={profileFor === "Groom"}
                            onChange={() => setProfileFor("Groom")}
                          />
                          <label className="form-check-label" htmlFor="Groom">
                            Groom
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 justify-content-center d-flex">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="sign-up">
                        Sign up Now
                      </button>
                    </div>
                  </form>
                  <div className="social-login">
                    <h5>- or Register with -</h5>
                    <a href="#" className="btn google ">
                      <i className="fab fa-google"></i> Sign up with Google
                    </a>
                    <a href="#" className="btn facebook ">
                      <i className="fab fa-facebook"></i> Sign up with Facebook
                    </a>
                  </div>
                </div>
                <div className="footer-pop">
                  Already a Member?{" "}
                  <a
                    href="#"
                    data-dismiss="modal"
                    data-target="#login"
                    data-toggle="modal">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AdminProfile;
