"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".txt-reveal");
    splitTypes.forEach((char: any, i) => {
      const text = new SplitType(char, { types: "chars" });
      gsap.fromTo(
        text.chars,
        {
          opacity: 0.4,
          // y: -20,
          // scaleY: 0,
          // transformOrigin: "center",
        },
        {
          // color: "red",
          // y: 0,
          // scaleY: 1,
          // transformOrigin: "top",
          duration: 0.3,
          stagger: 0.2,
          opacity: 1,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            pin: ".right",
            // markers: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });
  });
  // onEnter
  // onLeave
  // onEnterBack
  // onLeaveBack
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="min-h-screen p-16 text-black flex justify-start w-full leading-normal bg-green-400 items-center text-7xl "></div>
      <div className="min-h-screen p-16 text-black flex justify-start w-full leading-normal bg-red-400 items-center text-7xl ">
        <h2 className="txt-reveal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure
          doloribus distinctio unde nam facere temporibus iste repellat
          perspiciatis quos quae!{" "}
        </h2>
      </div>
      <div className="min-h-screen p-16 text-black flex justify-start w-full leading-normal bg-yellow-400 items-center text-7xl ">
        <h2 className="txt-reveal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure
          doloribus distinctio unde nam facere temporibus iste repellat
          perspiciatis quos quae!{" "}
        </h2>
      </div>
      <div className="min-h-screen p-16  text-black flex justify-start w-full leading-normal bg-gray-400   items-center text-7xl ">
        <h2 className="txt-reveal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure
          doloribus distinctio unde nam facere temporibus iste repellat
          perspiciatis quos quae!{" "}
        </h2>
      </div>
      <div className="h-[450px] w-[450px] rounded-lg bg-red-400 right"></div>
    </main>
  );
}
