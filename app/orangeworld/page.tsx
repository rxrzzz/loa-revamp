import Image from "next/image";
import { BlackGrid } from "../components/blackgrid";
import { Header } from "../components/header";
import { Overview } from "../components/overview";
import { ContentGrid } from "../components/contentgrid";
import { ContentGridTwo } from "../components/contentgridtwo";
import { ContentGridThree } from "../components/contentgridthree";
import ProjectFooter from "../components/project-footer";

const OrangeWorld = () => {
  return (
    <>
      <Header
        tags={[
          "Brand Design",
          "Packaging",
          "Brand Identity",
          "Food and Beverages",
        ]}
        bgColor="#DA3F07"
        textColor="white"
        tagline="Healthy &nbsp; All &nbsp; Natural &nbsp; Juice &nbsp; and &nbsp; Smoothie &nbsp; Bar"
        imageSrc="/ow/ow16.jpg"
        title="Orange World"
      />
      <div className="w-[95%] mx-auto">
        <Overview
          colors={["#DA3F07", "#F7DE4B"]}
          overview={`Orange World is a juice bar based in Victoria Island Lagos, Nigeria. They make delicious fruit based bottled juice and smoothies that can be ordered in person at their mobile food truck. The goal was to convey a friendly, bright and fun brand marketable to a hip young audience and is as attractive as their delicious juice and smoothie offerings.<br/><br/>I performed an extensive audit of the brand and its competitors and created a unified aestetic that clearly conveys healthy living, rejuvenation and freshness.`}
          personality={["Healthy", "Bright", "Fun"]}
          services={["Brand Identity", "Packaging", "Website", "Social Media"]}
          typefaces={["Cyntho Next"]}
        />
        <BlackGrid
          details="I conducted an analysis of the existing players in the smoothie and food beverage industry in Nigeria and this provided valuable insight when constructing the orange world brand."
          imgSrc="/ow/olivia.png"
          bgColor="#DA3F07"
        />
        <div className="lg:h-[95vh] mx-auto bg-[url('/ow/owmood.jpg')] bg-[60%]  bg-fixed mb-20"></div>
        <ContentGridTwo
          title="Brand Design"
          designSvg="/laptopwork.svg"
          headerText="Fun, Friendly and Youthful"
          details={`
          I explored a few logo options ranging from word marks to icon based logos and showed them to the client, after careful consideration, she made her decision based on the following criteria. `}
          imgSrcs={["/ow/ow31.jpg", "/ow/sketch2.jpg"]}
        />

        <ContentGrid
          title="Packaging Design"
          designSvg="/bottle.svg"
          headerText="Beautiful, Vivid and Customizable"
          details={`
             I used vivid, customisable designs that fit the colours of each flavour served at the juice bar,
          to give the brand an easy to recognise yet strong presence to its consumers. 
         The bottles are either glass or paper and can be recycled presenting a way for
         the company to remain both fashionable and environmentally-conscious.<br/><br/>
         The label allows some transparency on each bottle to allow consumers see the natural
          colour of the drink in the bottle making the bottle stand out from saturated fast food products.
           The bottles are made of sustainable materials and can be recycled, presenting a way for the 
           company to remain both fashionable and environmentally-conscious.
`}
          imgSrcs={["/ow/ow20.png", "/ow/ow25.jpg"]}
        />

        <ContentGridTwo
          title="Social and Print Media"
          designSvg="/facebook.svg"
          headerText="Introducing the Orange World Brand"
          details="Multiple print media campaigns that were distributed at offices and schools in Victoria Island to introduce people to the brand and its offerings.The social media posts focused on introducing the product to the real world and uses illustration in fun ways to increase the brand’s consumer engagement."
          imgSrcs={["/ow/ow26.jpg", "/ow/ow24.jpg"]}
        />
        <ContentGridThree
          title="Brand Guidelines"
          designSvg="/cycle.svg"
          headerText="Maintaining Brand Identity in a Fast Paced Environment"
          details="It can be difficult to maintain the a consistent identity while growing fast, The brand guidelines will help Orange World maintain consistency in its public presence and messaging."
          imgSrcs={["/ow/ow22.jpg", "/ow/ow23.jpg"]}
        />
        <ContentGridTwo
          title="Store Front"
          designSvg="/store.svg"
          headerText="Serve Customers Anywhere"
          details="I designed a store front base that could be applied to any kind of van to fit the business’s mobile shop strategy."
          imgSrcs={["/ow/ow27.jpg"]}
        />
      </div>
      <ProjectFooter
        nextName="Sanaa"
        nextLink="/sanaa"
        previousLink="/deliveryxpress"
        previousName="Delivery Xpress"
      />
    </>
  );
};

export default OrangeWorld;
