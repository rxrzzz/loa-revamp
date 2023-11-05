"use client";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  bgColor: string;
  textColor: string;
  title: string;
  tagline: string;
  tags: string[];
  imageSrc: string;
};

export const Header = ({
  bgColor,
  tagline,
  tags,
  textColor,
  title,
  imageSrc,
}: Props) => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let headerTimeline = gsap.timeline();
    let taglineTimeline = gsap.timeline();
    let tagTimeline = gsap.timeline();
    let ctx = gsap.context(() => {
      headerTimeline
        .set(".title span", { opacity: 0, scale: 1.5 })
        .to(".title span", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "easeInOut",
        });
      taglineTimeline
        .set(".tagline span", { opacity: 0, y: 30 })

        .to(".tagline span", {
          stagger: 0.1,
          y: 0,
          duration: 0.2,
          opacity: 1,
          ease: "cubic-bezier(1,0,0,1);",
        });
      tagTimeline.set(".tags p", { opacity: 0, y: 30 }).to(".tags p", {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.1,
        ease: "cubic-bezier(1,0,0,1);",
        delay: 2,
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);
  return (
    <main
      style={{
        background: `linear-gradient(to bottom,  ${bgColor} 0%,${bgColor} 85%, white 85%)`,
        color: textColor,
      }}
      ref={mainRef}
      className="w-full"
    >
      <div className="md:px-8 px-2 mx-auto pt-20">
        <p className=" font-bold xl:text-3xl md:text-2xl text-xl  text max-w-3xl title     ">
          {title.split("").map((char, index) => {
            return (
              <span className="" key={char + "-" + index}>
                {char}
              </span>
            );
          })}
        </p>
        <h1 className=" font-bold xl:text-6xl  md:text-4xl text-3xl mt-8 forma-deck tagline lg:whitespace-normal">
          {tagline.split(" ").map((char, index) => {
            return (
              <span className="inline-block" key={char + "-" + index}>
                {char}
              </span>
            );
          })}
        </h1>
        <div className="mb-12 mt-4 flex flex-wrap tags">
          {tags
            ? tags.map((tag) => (
                <p
                  className="border-2 md:text-sm  text-xs font-medium rounded-3xl p-1 px-2 mr-2 mb-2"
                  style={{ borderColor: textColor }}
                  key={tag}
                >
                  {tag}
                </p>
              ))
            : null}
        </div>

        <div></div>
        <section className="xl:flex justify-between lg:my-20 my-12 "></section>
        <Image
          src={imageSrc}
          height={1200}
          width={2000}
          priority
          alt={title}
          className=" object-cover pb-0 lg:pb-16  w-full  mx-auto "
        />
      </div>
    </main>
  );
};
