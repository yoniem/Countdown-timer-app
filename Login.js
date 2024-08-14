import React from 'react';

function Login({ toggleView }) {
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => toggleView('timer')}>Login</button>
            </form>
            <p>Don't have an account? <button type="button" className="btn btn-link" onClick={() => toggleView('register')}>Register</button></p>
        </div>
    );
}

export default Login;