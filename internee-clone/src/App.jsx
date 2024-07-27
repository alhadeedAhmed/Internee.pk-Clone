import React from "react";
import "./App.css";
import Head from "./components/header/Head";
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThirdSection from "./components/thirdsection/ThirdSection";
import Carousel from "./components/Carousel-Internship/Carousel";
import InternCards from "./components/Internship-cards/InternCards";
import BlogCards from "./components/Blogcards/BlogCards";
import TaskPortal from "./components/TaskPortal/TaskPortal";
import LMS from "./components/OurLMS/LMS";
import Instructor from "./components/Instructor/Instructor";
import Job from "./components/Job/Job";
import WhyInternee from "./components/WhyInternee/WhyInternee";
import TestimonialCarousel from "./components/TestimonialCarousel/TestimonialCarousel";
import Footer from "./components/Footer/Footer";
import CompanyInfo from "./components/CompanyCollaboration/CompanyInfo";
import ContactForm from "./components/CompanyCollaboration/ContactForm";
import ContactUS from "./components/ContactUs/ContactUs";
import ArrowButton from "./components/ArrowButton/ArrowButton";

const App = () => {
  return (
    <Router>
      <Head />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/internship" component={InternshipPage} />
        <Route path="/companycollaboration" component={CompanyCollaboration} />
        <Route path="/contact" component={ContactUSPage} />
      </Switch>
      <Footer />
      <ArrowButton />
    </Router>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <ThirdSection />
      <Carousel />
      <InternCards />
      <BlogCards />
      <TaskPortal />
      <LMS />
      <Instructor />
      <Job />
      <WhyInternee />
      <TestimonialCarousel />
    </>
  );
};

const InternshipPage = () => {
  return (
    <>
      <ThirdSection />
      <Carousel />
      <InternCards />
      <TaskPortal />
      <Job />
      <WhyInternee />
      <TestimonialCarousel />
    </>
  );
};

const CompanyCollaboration = () => {
  return (
    <>
      <CompanyInfo />
      <ContactForm />
    </>
  );
};

const ContactUSPage = () => {
  return (
    <>
      <ContactUS />
      <ContactForm />
    </>
  );
};

export default App;
