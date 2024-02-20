import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="row align-items-center  g-lg-5 mt-3">
      <div className="col-md-10 mx-auto col-lg-5">
        <form
          className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="enter your username..."
              {...register("username", { required: "Username is required" })}
            />
            <label htmlFor="email">Username</label>

            {errors?.username && (
              <section className="text-danger mt-1 ">
                {errors.username.message}
              </section>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password should be at least 6 charaters",
                },
              })}
            />
            <label htmlFor="password">Password</label>

            {errors?.password && (
              <section className="text-danger mt-1  ">
                {errors.password.message}
              </section>
            )}
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Login
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

export default Login;
