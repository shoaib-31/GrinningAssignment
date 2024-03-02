"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import First from "@/components/first";
import Card from "@/components/card";
import image1 from "../assets/image.png";
import Footer from "@/components/footer";
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";
import { useRef } from "react";

export default function Home() {
  const stepsRef = useRef(null);
  const steps = [
    {
      element: ".support-card",
      intro: "This is our Support",
      position: "right",
    },
    {
      element: ".memberships-card",
      intro: "These are our Memberships",
      position: "left",
    },
    {
      element: ".logos",
      intro: "Please visit our social media pages",
      position: "top",
    },
    {
      element: ".getting-started",
      intro: "Click Here to get started",
      position: "bottom",
    },
  ];
  return (
    <main className="flex min-h-screen w-screen flex-col items-center bg-[#faf8f0] overflow-hidden ">
      <Steps
        enabled={true}
        steps={steps}
        initialStep={0}
        onExit={() => {}}
        ref={stepsRef}
      />
      <First />
      <Card
        heading="Give your audience
an easy way to say thanks."
        cardType="SUPPORT"
        subHeading="Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message."
      >
        <Image
          src={image1}
          alt="backImage"
          height={1200}
          width={1200}
          className="h-full w-full"
        />
      </Card>
      <Card
        heading="Start a membership for
        your biggest fans."
        cardType="MEMBERSHIPS"
        subHeading="Earn a recurring income by accepting monthly or yearly subscriptions. Share exclusive content, or just give them a way to support your work on an ongoing basis.
        "
      >
        <Image
          src={image1}
          alt="backImage"
          height={1200}
          width={1200}
          className="h-full w-full "
        />
      </Card>
      <Footer />
    </main>
  );
}
