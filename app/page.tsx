// pages/index.js
"use client";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import TypeShoes from "../components/TypeShoes";


export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <TypeShoes />
      <Featured />
      
      <Footer />
    </main>
  );
}
