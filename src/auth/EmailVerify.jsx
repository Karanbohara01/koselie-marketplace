import React, { useState, useEffect } from "react";
import { MdToken } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import SignInPage from "../pages/userPages/SignInPage";

const EmailVerify = () => {
  const param = useParams();
  const [values, setValues] = useState({
    error: "",
    success: false,
  });

  const { error, success } = values;

  // verify process
  useEffect(() => {
    const token = param.token;
    fetch(`/api/confirmation/${token}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, error: "", success: true });
        }
      })
      .catch((err) => console.log(err));
  }, [param.token]);

  // to show error Message
  const showError = () => {
    return (
      <>
        <div className="d-flex justify-center items-center">
          <div
            className="bg-red-100  text-red-800 p-4 rounded-lg"
            style={{ display: error ? "" : "none" }}
            role="alert"
          >
            <strong className="font-bold text-sm mr-2">Error!</strong>
            <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
          </div>
        </div>
      </>
    );
  };

  const showSuccess = () => {
    return (
      <>
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
          <div
            className={`bg-white text-green-800 p-6 rounded-lg shadow-lg flex items-center max-w-md w-full transition-all duration-300 ${
              success ? "block" : "hidden"
            }`}
            role="alert"
          >
            <MdToken className="text-green-500 mr-4 text-4xl" />
            <div className="space-y-2">
              <strong className="block text-lg font-semibold">Success!</strong>
              <p className="text-sm leading-relaxed">
                Your email has been verified. You can now proceed to the login
                page.
              </p>
              <Link className="text-blue-300" to="/login">
                Click here to continue
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {showError()}
      {showSuccess()}
    </>
  );
};

export default EmailVerify;
