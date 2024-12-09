import "./globals.css"
import Navbar from "./components/navbar";
import Landingpage from "./components/landingpage";
import Aboutpage from "./components/aboutpage";
import Education from "./components/education";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <section className="bg-bgprimary md:px-[7rem] pb-[4rem] lg:pb-[8rem] pt-[1rem]">
        <Aboutpage />
      </section>
      <section className="bg-bgprimary md:px-[7rem]">
        <Education/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
