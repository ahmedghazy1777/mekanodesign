import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Expertise from "./components/Expertise";
import Transformation from "./components/Transformation";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="h-screen">
      <NavBar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Expertise />
      <Transformation />
      <Steps />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
