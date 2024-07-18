"use client";
import React, { useState } from "react"; // Import useState from React
import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import BlogPlus from "@/components/BlogPlus";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  const [nav, setNav] = useState(false); // Use useState hook

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Project />
          <Testimonial />
          <Blog />
          <BlogPlus />
          <Footer />
        </div>
      </div>
    </div>
  );
}
