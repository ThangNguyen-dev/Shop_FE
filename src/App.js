import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Routes, Route } from "react-router-dom";
// import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import routes from "./routes/routes";
import { Login } from "./login";
import { Register } from "./register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  return <>{currentForm === "login" ? <Login /> : <Register />}</>;
}

export default App;
