import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="w-screen m-0 p-0">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}
