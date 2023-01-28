"use client";
import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import Navbar from "@/components/Navbar";
import Nutshell from "@/components/Nutshell";
import Objective from "@/components/Objective";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Divider />
      <Programs />
      <Divider />
      <Objective />
      <Divider />
      <Nutshell />
      <Divider />
      <Partners />
      <Divider />
    </main>
  );
}
