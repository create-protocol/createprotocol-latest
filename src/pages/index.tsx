import Backers from "@/components/Backers";
import Banner from "@/components/Banner";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import GlobalStage from "@/components/GlobalStage";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";
import Product from "@/components/Product";
import SetsUsApart from "@/components/SetsUsApart";
import StayTuned from "@/components/StayTuned";
import Testimonial from "@/components/Testimonial";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} w-screen
 text-white`}
    >
      <Navbar />
      <Banner />
      <SetsUsApart />
      <Product />
      <Ecosystem />
      <GlobalStage />
      <Backers />
      <Testimonial />
      <Partner />
      <StayTuned />
      <Footer />
    </main>
  );
}
