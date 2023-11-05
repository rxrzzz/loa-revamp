"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

type OverviewProps = {
  overview: string;
  services: string[];
  personality: string[];
  typefaces: string[];
  colors: string[];
};
export const Overview = ({
  colors,
  overview,
  personality,
  services,
  typefaces,
}: OverviewProps) => {
  const [divShown, setDivShown] = useState<"overview" | "details">("overview");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  //   useLayoutEffect(() => {
  //     const fadeInTimeline = gsap.timeline({ repeat: -1 });
  //     const ctx = gsap.context(() => {
  //       fadeInTimeline
  //         .set(".overview", { opacity: 0, y: -20 })
  //         .to(".overview", { opacity: 1, y: 0 });
  //     }, sectionRef);
  //     return () => ctx.revert();
  //   }, []);
  return (
    <section
      className="md:flex flex-wrap font-roboto justify-between md:w-10/12 mx-auto lg:py-12 py-8 items-start font-semibold"
      ref={sectionRef}
    >
      <div className="md:w-4/12 flex  md:gap-8 gap-4  text-xl items-start md:text-3xl lg:text-4xl -deck md:sticky  top-14">
        <button
          style={{ borderColor: colors[0] }}
          className={`text-left w-fit ${
            divShown === "overview" ? `border-b-8` : ""
          }`}
          onClick={() => setDivShown("overview")}
        >
          Overview
        </button>
        <button
          style={{ borderColor: colors[1] }}
          className={`text-left w-fit ${
            divShown === "details" ? `border-b-8` : ""
          }`}
          onClick={() => setDivShown("details")}
        >
          Details
        </button>
      </div>
      <div className="7/12 max-w-4xl md:text-4xl text-lg mt-6 md:mt-0 lg:text-5xl leading-snug">
        {divShown === "overview" ? (
          <p
            dangerouslySetInnerHTML={{ __html: overview }}
            className="overview"
          ></p>
        ) : (
          <></>
        )}
        {divShown === "details" ? (
          <div className="details grid grid-cols-2 gap-12">
            <div className="">
              <h2 className="opacity-80 mt-4 text-lg md:mb-0 mb-2 md:text-4xl">
                Services
              </h2>
              {services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
            <div className="">
              <h2 className="opacity-80 mt-4 text-lg md:mb-0 mb-2 md:text-4xl">
                Personality
              </h2>
              {personality.map((personality) => (
                <p key={personality}>{personality}</p>
              ))}
            </div>
            <div className="">
              <h2 className="opacity-80 mt-4 text-lg md:mb-0 mb-2 md:text-4xl">
                Typefaces
              </h2>
              {typefaces.map((typeface) => (
                <p key={typeface}>{typeface}</p>
              ))}
            </div>
            <div className="">
              <h2 className="opacity-80 mt-4 text-lg md:mb-0 mb-2 md:text-4xl">
                Colors
              </h2>
              {colors.map((color) => (
                <div key={color}>
                  <div
                    style={{ backgroundColor: color }}
                    className="md:h-[100px] w-[40px] h-[40px] md:w-[100px] inline-block align-middle my-3"
                  ></div>{" "}
                  <span>{color}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
