'use client'
import Image from "next/image";
import Nav from "./_components/Nav";
import { useState } from "react";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Services from "./_components/Services";
import Portfolio from "./_components/Portfolio";
import Testimonails from "./_components/Testimonails";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  const [dark , setDark] = useState(false);
  const isDark = () =>{
    setDark(!dark)
    console.log('h');
  }
  return (
   <div className={dark ? 'dark' : 'app'}>
    <div className="dark:bg-slate-900">
    <Nav isDark = {isDark} dark = {dark}/>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Portfolio/>
    <Testimonails/>
    <Contact/>
    <Footer/>
    </div>
   </div>
  );
}
