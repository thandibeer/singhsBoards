const LoginForm = ({ onLogin = f => f }) => {
    return (
        <section >
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-lg-5 d-none d-md-block" >
                                    <img src={require("../images/ss.jpg")}
                                        alt="login form" className="img-fluid" style={{ borderRadius: "0.5rem", height: "100%" }} />                     </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ backgroundColor: '#e6e6e6' }}>
                                    <div className="card-body  text-black">

                                        <form method="post" action="/login/admin"
                                            onSubmit={(event) => onLogin(event, document.getElementById('email'), document.getElementById('password'))}>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <a href="#" className="logo"><img src={require("../images/logo.png")} alt="logo"
                                                    style={{ maxWidth: "150px" }} /></a>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                            <label className="form-label" htmlFor="email">Email address</label>
                                            <input type="email" name="email" id="email" className="form-control" required />

                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" className="form-control" required />

                                            <div className="errors">
                                                <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}></p>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-primary profile-button" style={{ width: '100%' }} type="submit">Login</button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;