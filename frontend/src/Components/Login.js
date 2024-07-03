import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Login() {
    return (
        <div className="container">
            <Navbar active={'Login'} />
            <h1 className='pg-heading'>Login</h1>
            <main>
                <form className='form'>
                    <div className="form-content">
                        <label htmlFor="username" className="form-label">Email</label>
                        <input type="text" id="username" className="form-input" />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-input" />
                    </div>
                    <div className="form-submit">
                        <button type="submit" className="form-button">Login</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
        
    )
}