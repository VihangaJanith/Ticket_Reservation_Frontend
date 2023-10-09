import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add registration logic here
    console.log(formData);
  };

  return (
    <>
      <header className="bg-primary text-white text-center py-5 mb-5">
        <h1>Login</h1>
        <p>Login to reserve train tickets</p>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              //   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              //   src="https://knowledgemission.kerala.gov.in/img/official-login.jpg"
              //   src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
              src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png"
              className="img-fluid"
              alt="Login"
            />
          </div>

          <div className="col-md-6 mt-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
