import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-screen m-0 p-0">
      <NavBar />
      <Hero />
      <p className="heading-large">Woop</p>
    </main>
  );
}
