import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from './store/auth-context'

function App() {
  //Using AuthContent, Provider is the default component given directly by react
  //The attribute value in Provider is neccessary and we need to keep it to create context.
  const authctx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!authctx.isLoggedIn && <Login />}
        {authctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
