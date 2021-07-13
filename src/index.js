import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./styles/tailwind.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Category from "./components/Category";
import Destinations from "./components/Destinations";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Company from "./components/company";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/*     <React.StrictMode>
     */}
    {/*    </React.StrictMode>
     */}{" "}
    <switch>
      <Route exact path="/" component={Navbar} />
      <Section />
      <Category />
      <Destinations/>
      <Steps/>
      <Testimonials/>
      <Company/>
      <Subscribe/>
      <Footer/>
    </switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
