import { BlackGrid } from "../components/blackgrid";
import { Header } from "../components/header";
import { Overview } from "../components/overview";
import { ContentGrid } from "../components/contentgrid";
import { ContentGridThree } from "../components/contentgridthree";
import { ContentGridTwo } from "../components/contentgridtwo";

const DeliveryXpress = () => {
  return (
    <>
      <Header
        tags={[
          "Brand Design",
          "Brand Identity",
          "Packaging",
          "Social Media",
          "Logistics",
        ]}
        bgColor="#302883"
        textColor="#FFF"
        tagline="Fast, &nbsp;Cost &nbsp;Efficient &nbsp;and &nbsp;Reliable &nbsp;courier &nbsp;solution &nbsp;for &nbsp;Africa."
        imageSrc="/deliveryxpress.jpg"
        title="Delivery XPress"
      />
      <div className="w-[95%] mx-auto">
        <Overview
          colors={["#391C8D", "#FFC300"]}
          overview={`Delivery Xpress is a competitive last-mile courier delivery solution in Nigeria. The startup allows Lagosians to send parcels and packages using a fast, cost effectively fleet of bikes, vans and trucks. 
        <br/><br/>The goal at Delivery Xpress was to operate in a sweet spot where cost is average but efficiency is maximized, first by employing a proprietary algorithm to optimize pickup and delivery routes for each driver
        and to have significant supply to match the growing demand for last mile delivery in Lagos.`}
          personality={["Reliable", "Fast"]}
          services={["Brand Identity", "Packaging", "Website", "Social Media"]}
          typefaces={["Cyntho Next"]}
        />
        <BlackGrid
          bgColor="#FFC300"
          details="I performed an analysis of existing players in Lagos’ Last Mile delivery space, in a bid to measure how the cost and efficiency of these delivery companies is perceived by their customers and how their branding contributes to these perceptions. &nbsp;
I set out to design a cohesive brand identity, packaging and assets that communicated trust to customers from the moment they opened the app to handing packages over to delivery drivers to the point the packages are handed to their final recipients."
          imgSrc="/de/comp.png"
        />
        <div className="hidden lg:block h-[80vh]  mx-auto bg-[url('/de/de15.jpg')] bg-[60%] w-[100%]  bg-fixed mb-20"></div>
        <ContentGrid
          title=" Brand Design"
          designSvg="/laptopwork.svg"
          headerText="Increasing brand trust after every delivery"
          details={`I discovered during competitor analysis that there was a large number of competitors in Lagos’ last mile delivery industry and helped the client identify key areas that they could explore to capture a niche audience. After that I defined a concept that serves the brand and its goals.
        <br/><br/>In the logo mark, I used a combination of the first letter D and a road icon in combination with a letter X and a chevron to show the speed and efficiency of the company.  
           <br/><br/>The font was specifically chosen for the perception of seriousness it portrays and is balanced with colours that communicate efficiency (yellow) and reliability (purple).`}
          imgSrcs={["/de/de16.png", "/de/de17.jpg"]}
        />
        <ContentGridThree
          title="Packaging"
          headerText=" Earning Trust, Keeping Drivers Safe"
          designSvg="/beverage.svg"
          details={`
        All items used by operators on  Delivery Xpress’ fleet were designed to be attractive
        while conveying professionalism, the particular realities of working in Lagos
        (traffic, bad drivers) were also accounted for by picking a primary colour that
        is bright and easy to spot from afar, making deliveries a bit safer for delivery
        riders and their parcels..`}
          imgSrcs={[
            "/de/de9.jpg",
            "/de/de6.jpg",
            "/de/de21.jpg",
            "/de/de1.jpg",
          ]}
        />
        <ContentGridTwo
          title=" Iconography"
          designSvg="/triangle.svg"
          headerText="Applicability on multiple platforms"
          details={`
        The iconography was curated to be easy to apply on websites, apps and social media,
        communicating speed, flexibility and professional operators.`}
          imgSrcs={["/de/10.png", "/de/de7.jpg"]}
        />
        <ContentGridThree
          title="Brand guidelines"
          designSvg="/cycle.svg"
          headerText="Maintaining Brand Identity in a Fast Paced Environment"
          details="It can be difficult to maintain the a consistent identity while growing fast, The brand guidelines will help Delivery Xpress maintain consistency in its public presence and messaging."
          imgSrcs={["/de/bg.jpg", "/de/bg2.jpg"]}
        />
        <ContentGridTwo
          title="Stationery"
          designSvg="/pen.svg"
          headerText="Introducing the company"
          details="Delivery Xpress has people running operations at its core, from sales people to office administrators, the company’s business cards and stationery had to be coherent with the rest of its branding. They were designed to convey the same messages to everyone from customers to investors. Trust, Reliability and efficiency."
          imgSrcs={["/de/de4.jpg", "/de/de5.jpg"]}
        />
        <ContentGridThree
          title="Social Media"
          designSvg="/facebook.svg"
          headerText="Using social media to communicate and engage"
          details="Social Media Posts focus on communicating with thousands of people that depend on Delivery Xpress daily, posts could be about changes to pricing and services or challenges but they had to communicate clearly and effectively."
          imgSrcs={["/de/de8.jpg"]}
        />
      </div>
    </>
  );
};

export default DeliveryXpress;
