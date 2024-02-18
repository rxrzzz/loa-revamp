"use client";
import { projects } from "@/projects";
import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { Project } from "./components/project";
export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (headerRef.current?.children) {
      let fadeInTimeline = gsap.timeline();
      let subHeadingTimeline = gsap.timeline();
      let children = headerRef.current.children;

      fadeInTimeline
        .set(children, {
          y: 20,
          opacity: 0,
          ease: "linear",
        })
        .to(children, { y: 0, opacity: 1, duration: 0.5, stagger: 0.5 });
      subHeadingTimeline
        .set(subHeadingRef.current, {
          y: 20,
          opacity: 0,
        })
        .to(subHeadingRef.current, {
          y: 0,
          opacity: 1,
          ease: "easeInOut",
          delay: 2,
          duration: 0.4,
        });
    }
  }, []);

  useLayoutEffect(() => {
    let projectsTimeline = gsap.timeline();
    let projects = projectsRef.current?.children;
    if (projects) {
      projectsTimeline
        .set(projects, { y: 20, opacity: 0, display: "none" })
        .to(projects, {
          y: 0,
          opacity: 1,
          display: "grid",
          stagger: 0.2,
          delay: 3,
        });
    }
  }, []);

  return (
    <main
      className={`lg:pt-8 pt-3 lg:px-8 px-3 transition-colors  duration-300`}
      ref={mainRef}
    >
      <div className="w-full text-center items-center bg--400  mx-auto h-2/5  py-16 md:py-36">
        <h1
          className="lg:text-7xl md:text-6xl text-4xl   w-fit mx-auto font-bold forma-deck gap-2 md:flex"
          ref={headerRef}
        >
          <span className="block span1">Hello.</span>{" "}
          <span className="block span2">I&apos;m Lateefat</span>
          <span className="block span3"> Odeyemi-Aliu.</span>
        </h1>
        <p
          className="text-center  md:text-xl absans-regular max-w-3xl mx-auto mt-10 lg:mt-6 text-sm leading-6 font-medium"
          ref={subHeadingRef}
        >
          I&apos;m a creative graphic designer based in Manchester with two
          years of experience in creating professional artwork, infographics and
          digital marketing content with Adobe Illustrator, Photoshop and
          InDesign.<span className="block"></span>
        </p>
      </div>
      <div
        className="lg:grid-cols-2 grid lg:py-24 py-10 gap-2"
        ref={projectsRef}
        id="work"
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            link={project.link}
            name={project.name}
            src={project.src}
            tags={project.tags}
          />
        ))}

        <div className="lg:h-[600px] w-full flex items-center">
          <div className="lg:h-fit my-10 lg:my-0 text-center flex flex-col gap-3   w-full bg-white  ">
            <a
              href="mailto:latifah.odeyemi@gmail.com"
              className="lg:h-[180px] lg:w-[180px] h-[120px] w-[120px] mx-auto rounded-full bg-black flex items-center justify-center transition-all text-white font-romono text-md lg:text-lg hover:scale-110 duration-300"
            >
              EMAIL ME <span className="mr-2"></span>&gt;
            </a>
            <p className="font-extrabold absans-regular opacity-95 font-satoshi lg:text-3xl text-xl h-fit">
              latifah.odeyemi@gmail.com
            </p>
            <div className="font-romono font-bold text-sm  ">
              <a
                className="mr-2"
                href="https://www.linkedin.com/in/odeyemi-aliu-lateefat-8801a2197"
              >
                LINKEDIN
              </a>
              <a href="https://www.behance.net/odeyemilateefat">BEHANCE</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
