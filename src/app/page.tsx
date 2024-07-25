import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Ideas from "@/sections/ideas";
import NavBar from "@/sections/nav-bar";
import Resources from "@/sections/resources";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Resources />
      <Ideas />
      <Footer />
    </>
  );
}
