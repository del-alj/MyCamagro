import React from 'react';
// import './Login.css';
import {LoginWrapper} from "./style.js";

function LoginPage() {
    return (
        <LoginWrapper>
            <div className="cartdiv">

            <h1 className="Logotext">Camagro</h1>
            <form className="flexdiv">
                <label className="addspace">
                    <input type="text" placeholder="Username" className="input-css"/>
                </label>
                <label className="addspace">
                    <input type="password" placeholder="Password" className="input-css"/>
                </label>
                <div>
                    <button type="submit" className="login_buton">Log in</button>
                </div>
                <a className="forgot-password">Forgot password?</a>
                <p className="line-css">Don't have an account? <a href="#">Sign up</a></p>
            </form>
            </div>
        </LoginWrapper>
    );
}
export default LoginPage;
