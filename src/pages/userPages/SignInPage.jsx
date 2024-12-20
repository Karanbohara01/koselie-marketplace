import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../../auth"; // Ensure this is correctly implemented

const SignInPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToPage: false,
  });

  const { email, password, error, redirectToPage } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: "", [name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, error: "" });

    try {
      const data = await signin({ email, password }); // Ensure signin is an async function
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        authenticate(data, () => {
          setValues({ ...values, redirectToPage: true });
        });
        // Optionally redirect to home after successful login
      }
    } catch (err) {
      console.error(err);
      setValues({
        ...values,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  useEffect(() => {
    const { user } = isAuthenticated(); // Get authenticated user
    if (redirectToPage) {
      if (user && user.role === 1) {
        navigate("/admin");
      } else if (user && user.role === 0) {
        navigate("/");
      }
    }
  }, [redirectToPage, navigate]);

  const showError = () =>
    error && (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4" role="alert">
        <strong className="font-bold text-sm mr-2">Error!</strong>
        <span className="block text-sm sm:inline">{error}</span>
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-6 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8 sm:p-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome to Koselie
          </h2>
          <p className="mt-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account
          </p>
          {showError()}
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500 text-gray-900 dark:text-white focus:outline-none"
              placeholder="name@company.com"
              required
              onChange={handleChange("email")}
              value={email}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500 text-gray-900 dark:text-white focus:outline-none"
              placeholder="••••••••"
              required
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Sign in
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
