import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const registerUser = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (response.ok) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (response.ok) {
        const { token } = data;
        localStorage.setItem("token", token);
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:3000/api/v1/auth/check", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const profile = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:3000/api/v1/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createExercise = async (name, load, reps) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:3000/api/v1/app/create", {
          method: "POST",
          body: JSON.stringify({ name, load, reps }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const data = await response.json();
        if(response.ok) return true
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getExercises = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:3000/api/v1/app", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const data = await response.json();
        if(response.ok) return data
      } catch (error) {
        console.log(error);
      }
    }
  }

  const deleteEx = async (id) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:3000/api/v1/app/delete", {
          method: "DELETE",
          body: JSON.stringify({id}),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const data = await response.json();
        if(response.ok) return data
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <AppContext.Provider
      value={{ registerUser, loginUser, checkLogin, deleteEx, profile, createExercise, getExercises }}
    >
      {children}
    </AppContext.Provider>
  );
};
