import { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(); // CONTEXT

export const AuthProvider = ({ children }) => {
  // PROVIDER

  const [token, settoken] = useState(localStorage.getItem("token"));

  const storetokenInLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("Logout data: ", isLoggedIn);

  // LOGOUT FUNCTIONALITY
  const LogoutUser = () => {
    settoken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLs, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// DFELEVERY THE TOKEN
export const useAuth = () => {
  const useAuthContextValue = useContext(AuthContext);

  if (!useAuthContextValue) {
    throw new Error("Please use the AuthProvider fron contextApi in main.jsx");
  }
  return useAuthContextValue;
};
