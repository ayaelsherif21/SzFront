import React, { useState } from "react";
import "./Login.css";
import LoginBg from "../../../images/70315747_2503614136348024_2059368429667745792_o.jpg";

function Logging() {

}

export default function Login() {
  return (
      <div
          className="bg_image"
          style={{
            backgroundImage: "url(" + LoginBg + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            color: "#f5f5f5",
          }}
      >
        <div className="bigDiv">
          <div className={"reggBox"}>
            <div className="mb-4">
              <h1 className={" lgHead text-white"}>Login Guest</h1>
            </div>

            {/*email panel*/}
            <div className="input-group pt-4 p-lg-2">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
              <input
                  type="text"
                  id={"email"}
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
              />
            </div>
            {/*password*/}
            <div className="input-group mb-3 p-lg-2">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
              <input
                  type={"password"}
                  className="form-control"
                  id={"passo"}
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
              />
            </div>

            <div className="checkbox-container">
              {/*<div className={"m-lg-2 text-white "} htmlFor="checkbox">*/}
              {/*  Show password?*/}
              {/*</div>*/}
              {/*<input*/}
              {/*    className="form-check-input mt-3"*/}
              {/*    id={"checkBox"}*/}
              {/*    type="checkbox"*/}
              {/*    value=""*/}
              {/*    aria-label="Checkbox for following text input"*/}
              {/*    checked={isShown}*/}
              {/*    onChange={togglePassword}*/}
              {/*/>*/}

              <button className="signinButton mt-3" onClick={Logging}>
                Sign In
              </button>
            </div>
            {/*forget password*/}
            <div className={"mt-2"}>
              <a id={"A"} href="#">
                Forgot Password?
              </a>
            </div>

            {/*buttons for logging in */}

            <div className={"justify-content-center "}>
              <div className={"mt-2 justify-content-center"}>
                <a id={"A"} href={"/Register"}>
                  New to the family? Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


