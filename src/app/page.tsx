"use client";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alpine from "alpinejs";
 
window.Alpine = Alpine
 
Alpine.start()


export default function Home() {
  return (
    <main className="w-screen m-0 p-0">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
