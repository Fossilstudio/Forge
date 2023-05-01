/*
 * @Date: 2023-04-26 12:24:20
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-01 01:36:16
 * @FilePath: /Forge/client/src/routes.js
 */
import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./components/App";
import Game from "./components/game/Game";
import SignInPage from "./components/sign-in/SignInPage";
import SignUpPage from "./components/sign-up/SignUpPage";
import ContactPage from "./components/contact/ContactPage";

export default (
  <Routes>
    <Route exact path="/" element={<SignUpPage/>} />
    <Route exact path="/game" element={<Game/>} />
    <Route exact path="/signin" element={<SignInPage/>} />
    <Route exact path="/signup" element={<SignUpPage/>} />
    <Route exact path="/contact" element={<ContactPage/>} />
  </Routes>
)