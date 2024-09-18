'use client'
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import TypeShoes from "../components/TypeShoes";
import { ThemeProvider } from "next-themes";
export default function Home() {
  return (
    <main className="">
      <ThemeProvider attribute="class">
      <NavBar/>
      <Hero/>
      <TypeShoes/>
      <Featured/>
      <Footer/>
      </ThemeProvider>
    </main>
  )
}
