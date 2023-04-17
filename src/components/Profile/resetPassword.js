import React from "react";

function ResetPassword(){
    return(
        <div className={"regBox"}>
            <div className="mb-4">
                <h1 className={"text-white"}>Resetting Password</h1>
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
            <div className="input-group mb-3 p-lg-2">
          <span className="input-group-text" id="basic-addon1">
            Repeat Password
          </span>
                <input
                    type={"password"}
                    className="form-control"
                    id={"respasso"}
                    placeholder="Repeat Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                />
            </div>
            {/*buttons for logging in */}

        </div>

    );
}

export default ResetPassword();