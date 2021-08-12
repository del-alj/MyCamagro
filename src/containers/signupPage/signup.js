import React from 'react';
import {SignupWrapper} from "./style.js";

function SignupPage() {
    return (
        <SignupWrapper>
            <div className="cartdiv">

            <h1 className="Logotext">Camagro</h1>
            <form className="flexdiv">
            <label className="addspace">
                    <input type="text" placeholder="Email of Mobile Number" className="input-css"/>
                </label>
                <label className="addspace">
                    <input type="text" placeholder="Full Name" className="input-css"/>
                </label>
                <label className="addspace">
                    <input type="text" placeholder="Username" className="input-css"/>
                </label>
                <label className="addspace">
                    <input type="password" placeholder="Password" className="input-css"/>
                </label>
                <div>
                    <button type="submit" className="signup_buton">Sign up</button>
                </div>
                <p className="line-css"> Have an account? <a href="#">Log in</a></p>
            </form>
            </div>
        </SignupWrapper>
    );
}
export default SignupPage;