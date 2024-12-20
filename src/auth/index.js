// Function for user signup
export const signup = (user) => {
  return fetch(`/api/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })

    .catch((err) => console.log(err));
};

// FOR SIGNIN
export const signin = (user) => {
  return fetch(`/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })

    .catch((err) => console.log(err));
};

// authenticataion and to store token
export const authenticate = (data, next) => {
  if (typeof Window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

// Redirect based on role after authentication
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const jwt = localStorage.getItem("jwt");
  return jwt ? JSON.parse(jwt) : false;
};



export const signout = (next) => {
  if (typeof window !== "undefined") {
    // Remove the JWT token from localStorage
    localStorage.removeItem("jwt");

    // Make the sign-out request to the backend API
    return fetch("/api/signout", {
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Successfully signed out");
        } else {
          console.error("Error signing out", res);
        }
        next(); // Execute the callback function (e.g., redirect to login page)
      })
      .catch((err) => {
        console.error("Error during signout", err);
        // Optionally, you can call next() in case of error too, or handle it accordingly
        next();
      });
  }
};
