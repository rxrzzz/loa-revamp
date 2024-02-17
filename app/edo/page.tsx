import Image from "next/image";
import { BlackGrid } from "../components/blackgrid";
import { Header } from "../components/header";
import { Overview } from "../components/overview";
import { ContentGrid } from "../components/contentgrid";
import { ContentGridTwo } from "../components/contentgridtwo";
import { ContentGridThree } from "../components/contentgridthree";

const Edo = () => {
  return (
    <>
      <Header
        tags={["Brand Design", "Editorial Design", "Public Utility"]}
        bgColor="#C11111"
        textColor="#fff"
        tagline="Branding &nbsp;a &nbsp;government &nbsp;for &nbsp;the &nbsp;modern &nbsp;era."
        imageSrc="/edo/edo4.jpg"
        title="Edo"
      />
      <div className="w-[95%] mx-auto">
        <Overview
          colors={["#C11111", "#EBB83F"]}
          overview={`<p>In 2021, I worked at Redwire Marketing, an insight-driven marketing and brand consultancy company, committed to helping people and organisations build and sustain transformational brands and marketing programmes.

        The election of a new state Governor for Edo State, Nigeria in 2020 called for a new unique logo that captures the historical elements,
         heritage and industries in Edo. <br/><br/>Redwire bid to design such a logo in 2021 and I was responsible for designing one of the logo options.
          I was also responsible for working with a key government parastatal on developing print and digital media assets for use by stakeholders
           within the government.</p>`}
          personality={["Strong", "Modern"]}
          services={["Brand Design", "Editorial Design"]}
          typefaces={["Helvetica Nue"]}
        />
        <BlackGrid
          bgColor="#C11111"
          details=" A clearly stated goal of this project was to produce a brand that clearly sets Edo apart from other provinces in Nigeria while getting the attention of its inhabitants through a simple and clear design.&nbsp;
        After some research, I came to the understanding that Modern cities (as public institutions) in today’s global and information rich world need simple visual messaging. I decided to design simple logo that adapts and presents the rich history of Edo.        
        "
          imgSrc="/edo/edo9.png"
        />
        <div className="h-[80vh] mx-auto bg-[url('/edo/edo13.jpg')]  bg-[60%] w-[100%]  bg-fixed mb-20"></div>
        <ContentGrid
          title="Brand Design"
          designSvg="/laptopwork.svg"
          headerText="History through a modern lens"
          details={`
         <p>
         A major historical element in Edo State is the IDIA MASK, it belonged to Idia, the mother of Oba Esigie who ruled Edo in the 16th century and is one of the most recognisable symbols of African art in the world. <br/></br>
         I selected a logo option that captures the history of Edo state and a modern typeface which represents the dawn of a new Edo by using the Idia mask sign as an addition to Helvetica Neue, a font that has a modern, strong feel. <br/><br/>
         A constant reminder of Edo’s rich history and its bright future as a cultural and commercial hub in Southern Nigeria. The main brand colours; Red and Gold also represent energy, passion and wealth, they complement the logo and display qualities that are ever-present in Edo society. <br/><br/>
         </p>
          `}
          imgSrcs={["/edo/edod.jpg", "/edo/edo19.png", "/edo/edo20.jpg"]}
        />
        <ContentGridTwo
          title="Brand Identity"
          headerText="Strength and Modernity"
          designSvg="/earth.svg"
          details={`<p>
          The Edo state government wanted a brand that portrayed both strength and modernity, the logo mark achieves this by incorporating a recognisable symbol of the strength of the Edo people into a modern, sleek font. <br/><br/>
          The logo and colours are easy to use on different mediums, from stationery to clothing to billboards. The logo mark is also instantly recognisable in any size. 
          </p>`}
          imgSrcs={[
            "/edo/edo11.jpg",
            "/edo/edo21.jpg",
            "/edo/edo8.jpg",
            "/edo/tshirt2.jpg",
            "/edo/edo6.jpg",
            "/edo/edo1.jpg",
          ]}
        />
        <ContentGridThree
          title="Editorial Design"
          designSvg="/tablet.svg"
          headerText="Condensing Information into a reader-friendly format"
          details={`The Edo State Federal Ministry of Humanitarian Affairs, Disaster Management, and Social Development analyzed poverty data in the state and sought to present it visually. I was in charge of designing infographics to convey the information effectively, collaborating with two other designers to choose colors and visualization methods, prioritizing readability and conciseness.`}
          imgSrcs={["/edo/edo12.jpg", "/edo/edo5.jpg"]}
        />
        <div className="mb-20"></div>
        <ContentGridTwo
          title="Digital and Print Media"
          designSvg="/phone.svg"
          headerText="Improving messaging around Taxation"
          details={`
        I partnered with the Edo State Internal Review Service to create visually appealing trifold flyers and social media posts, promoting a Tax Enlightenment and Education program. The goal was to enhance public perception and understanding of taxes in Edo, while aligning with the government's branding for a modern, trustworthy image.`}
          imgSrcs={["/edo/edo10.jpg", "/edo/edo14.jpg"]}
        />
      </div>
    </>
  );
};

export default Edo;
