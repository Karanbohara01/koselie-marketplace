import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../auth";

const SignUpPage = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const onhandleChange = (name) => (event) => {
    setValue({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ ...values, error: "", success: false });

    signup({ name, password, email })
      .then((data) => {
        if (data.error) {
          // handle case when there is an error in the response
          setValue({ ...values, error: data.error, success: false });
        } else {
          //successful login
          setValue({
            ...values,
            name: "",
            password: "",
            email: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => {
        setValue({
          ...values,
          error: "Something went wrong. Please try again",
          success: false,
        });
        console.error(err);
      });
  };

  // to show error Message
  const showError = () => {
    return (
      <div
        className="bg-red-100 text-red-800 p-4 rounded-lg"
        style={{ display: error ? "" : "none" }}
        role="alert"
      >
        <strong className="font-bold text-sm mr-2">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    );
  };

  const showSuccess = () => {
    return (
      <div
        className="bg-green-100 text-greens-800 p-4 rounded-lg"
        style={{ display: success ? "" : "none" }}
        role="alert"
      >
        <strong className="font-bold text-sm mr-2">Success!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">
          Your account has been created successfully. Kindly verify your email
        </span>
      </div>
    );
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="px-4 py-8 sm:px-6 lg:px-8 w-full max-w-lg">
          <h1 className="text-3xl sm:text-4xl mb-5 text-pink-400 font-extrabold text-center">
            Koselie
          </h1>
          <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 sm:p-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold leading-tight text-gray-900 dark:text-white text-center">
                Create an account
              </h2>
              {showError()}
              {showSuccess()}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={onhandleChange("name")}
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white
                    mb-2"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onhandleChange("email")}
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 dark:text-white 
                    mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onhandleChange("password")}
                    value={password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-900 dark:text-white
                    mb-2"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      to="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Create an account
                </button>

                {/* Existing Account Link */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
