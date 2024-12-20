import React, { useState } from "react";
import { isAuthenticated } from "../../auth"; // Import the isAuthenticated function to retrieve the token

const AddCategories = () => {
  // State variables for category name, error message, and success status
  const [category_name, setCategory] = useState(""); // Stores the category name input
  const [error, setError] = useState(false); // Stores error message, if any
  const [success, setSuccess] = useState(false); // Stores success status of the category submission

  // Get the token from the authentication system
  const { token } = isAuthenticated();

  // Handler for input change to update category name and reset error message
  const onHandleChange = (e) => {
    setError(""); // Reset error message whenever input changes
    setCategory(e.target.value.toLowerCase()); // Set the category name in lowercase (optional, for consistency)
  };

  // Function to submit the category form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading when form is submitted
    setError(""); // Clear any previous error messages
    setSuccess(false); // Reset success status before submitting

    // Function to make a POST request to the server to add a category
    const addCategory = (token, category) => {
      return fetch(`/api/postcategory`, {
        method: "POST", // Set the HTTP method to POST
        headers: {
          Accept: "application/json", // Accept JSON response
          "Content-Type": "application/json", // Send data in JSON format
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(category), // Send the category data in the body of the request
      })
        .then((res) => res.json()) // Parse the response JSON
        .catch((err) => console.log(err)); // Catch any errors and log them
    };

    // Call the addCategory function and handle the response
    addCategory(token, { category_name })
      .then((data) => {
        if (data && data.error) {
          setError(data.error); // Set the error message if the response contains an error
        } else {
          setError(""); // Clear the error message if category is added successfully
          setSuccess(true); // Set success to true when category is added successfully
          setCategory(""); // Clear the input field after successful submission
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong !"); // Set a generic error message if something goes wrong
      });
  };

  // Function to display error message if there's an error
  const showError = () => {
    return (
      <div
        className="bg-red-100 text-red-800 p-4 rounded-lg" // Tailwind CSS classes for styling error message
        style={{ display: error ? "" : "none" }} // Only display error if there's an error message
        role="alert" // Semantic role for alert
      >
        <strong className="font-bold text-sm mr-2">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    );
  };

  // Function to display success message if category is added successfully
  const showSuccess = () => {
    return (
      <div
        className="bg-green-100 text-green-800 p-4 rounded-lg" // Tailwind CSS classes for styling success message
        style={{ display: success ? "" : "none" }} // Only display success if successful flag is true
        role="alert" // Semantic role for alert
      >
        <strong className="font-bold text-sm mr-2">Success!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">
          Category has been added successfully!
        </span>
      </div>
    );
  };

  return (
    <>
      {showError()} {/* Show error message if there's any error */}
      {showSuccess()}{" "}
      {/* Show success message if category is added successfully */}
      {/* Category input form */}
      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            onChange={onHandleChange} // On input change, update category_name state
            value={category_name} // Bind the input field with the state category_name
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-lg text-red-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red-900 dark:border-green-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " // Placeholder text that disappears when the user types
            required // Input field is required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-red-500 dark:text-red-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Category Name
          </label>
        </div>

        {/* Submit button to add category */}
        <button
          type="submit"
          onClick={handleSubmit} // Handle the form submission
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddCategories;
