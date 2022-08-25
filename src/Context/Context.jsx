import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
    name:"",
  });

  function handleLogin(token,name) {
    setState({
      ...state,
      isAuth: true,
      token: token,
      name:name
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null,
      name:""
    });
  }

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
