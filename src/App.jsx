import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Link,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./Componenets/NavBar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
