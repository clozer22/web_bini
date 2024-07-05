import Image from "next/image";
import Navbar from "./components/Navbar/page.jsx"
import Banner from "./components/Banner/page.jsx"
import Characters from "./components/Characters/page.jsx"
import MusicContent from "./components/MusicContent/page.jsx"
import Footer from "./components/Footer/page.jsx"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />  
      <Banner />
      <Characters />
      <MusicContent />
      <Footer />
    </main>
  );
}
