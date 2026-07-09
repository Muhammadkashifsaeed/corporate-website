"use client";
import Header from "@/app/components/Header";
import Landing from "@/app/components/Landing";
import Services from "@/app/components/Services";
import Team from "@/app/components/Team";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Customers from "@/app/components/Customers";
import RecentCase from "@/app/components/RecentCase";
import BusinessServices from "@/app/components/BusinessServices";
import "react-tabs/style/react-tabs.css";

export default function Home() {
  return (
    <div className="w-full justify-center items-center">
      <Header />
      <Landing />
      <BusinessServices />
      <Services />
      <RecentCase />
      <Team  />
      <Blog />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
}