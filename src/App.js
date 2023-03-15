import React, { useEffect } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCharacters } from "./store/createSlice";
import Home from "./Pages/Home/Home";
import Character from "./Pages/Character/Character";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { gapi } from "gapi-script";
function App() {
  const dispatch = useDispatch();
  const clientId =
  "414399696868-5kalous0g9i530t2cfp5c09aeq9jtpse.apps.googleusercontent.com";


  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          clientId,
        plugin_name: "/",
      });
    });
  })
 

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/characters" element={<Home />} />
          <Route path="/characters/:id" element={<Character />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
