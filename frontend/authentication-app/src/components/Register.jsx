import { useState } from "react";

function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = newUser;

    if (username.trim() && email.trim() && password.trim()) {
      console.log(username, email, password);
    } else {
      setErrorMsg("All fields must be filled");
    }
  };
  return (
    <section className="row align-items-center  g-lg-5 mt-3">
      <div className="col-md-10 mx-auto col-lg-5">
        <form
          className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          onSubmit={handleSubmit}
        >
          {errorMsg && (
            <section className="alert alert-danger ">
              <p className="m-0">{errorMsg}</p>
            </section>
          )}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username..."
              value={newUser.username}
              onChange={handleChange}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              placeholder="Enter your email..."
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <hr className="my-4" />
          <small className="text-body-secondary">
            By clicking Sign up, you agree to the terms of use.
          </small>
        </form>
      </div>
    </section>
  );
}

export default Register;
