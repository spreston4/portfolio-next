import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-screen m-0 p-0">
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
