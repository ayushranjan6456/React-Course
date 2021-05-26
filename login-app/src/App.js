import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContent from "./store/auth-content";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeduserinfo = localStorage.getItem("isLoggedIn");
    if (storeduserinfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // localStorage.setItem('isLoggedIn', '0')
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  //Using AuthContent, Provider is the default component given directly by react
  //The attribute value in Provider is neccessary and we need to keep it to create context.
  return (
    <AuthContent.Provider value={{isLoggedIn: isLoggedIn}}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContent.Provider>
  );
}

export default App;
