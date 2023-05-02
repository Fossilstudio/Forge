/*
 * @Date: 2023-04-26 12:24:20
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-01 23:25:53
 * @FilePath: \Forge\client\src\routes.js
 */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./components/sign-up/SignUpPage";
import ContactPage from "./components/contact/ContactPage";
import Help from "./components/Help/Help";
import Gallery from "./components/Gallery/Gallery"

export default (
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/signup" element={<SignUpPage/>} />
    <Route exact path="/contact" element={<ContactPage/>} />
    <Route exact path="/help" element={<Help/>} />
    <Route exact path="/gallery" element={<Gallery/>} />

  </Routes>
)