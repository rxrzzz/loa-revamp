"use client";
import { projects } from "@/projects";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { Project } from "./components/project";
export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

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
      <div className="w-full md:flex items-center  justify-between h-2/5">
        <h1
          className="lg:text-7xl md:text-6xl text-4xl font-bold forma-deck max-w-3xl"
          ref={headerRef}
        >
          <span className="block span1">Hello.</span>{" "}
          <span className="block span2">I&apos;m Lateefat</span>
          <span className="block span3"> Odeyemi-Aliu.</span>
        </h1>
        <p
          className="text-right max-w-3xl self-end md:text-xl mt-10 lg:mt-6 text-sm leading-6 font-medium"
          ref={subHeadingRef}
        >
          I&apos;m a creative & hardworking graphic designer based in Manchester
          <span className="md:block"></span>
          with two years of experience in creating professional artwork,
          <span className="md:block"></span>
          infographics and digital marketing content with Adobe Illustrator,
          <span className="md:block"></span>
          Photoshop and InDesign.<span className="block"></span>
        </p>
      </div>
      <div
        className="lg:grid-cols-2 grid lg:py-24 py-10 gap-6"
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
        {/* <div className="h-[600px] w-full bg-white"></div> */}
      </div>
      <footer className="mx-auto flex-col justify-between pt-24 hidden">
        <div className="mb-40">
          <h1 className=" font-extrabold md:text-6xl text-5xl lg:text-7xl mb-8">
            LET&apos;S WORK TOGETHER
          </h1>
          <Link
            href="mailto:latifah.odeyemi@gmail.com"
            className="lg:h-[180px] lg:w-[180px] h-[120px] w-[120px] rounded-full bg-white flex items-center justify-center transition-all text-black  text-md lg:text-lg  hover:scale-110 duration-300"
          >
            EMAIL ME <span className="ml-3">&gt;</span>
          </Link>
        </div>
        <div className="mt-auto pb-12">
          <p className="font-extrabold opacity-95  lg:text-3xl text-xl mb-4">
            latifah.odeyemi@gmail.com
          </p>
          <div className="md:flex justify-between items-baseline">
            <div className=" font-bold text-xs ">
              <Link
                href="https://www.linkedin.com/in/odeyemi-aliu-lateefat-8801a2197"
                className="mr-2"
              >
                LINKEDIN
              </Link>
              <Link href="https://www.behance.net/odeyemilateefat">
                BEHANCE
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
