import Image from "next/image";
import { BlackGrid } from "../components/blackgrid";
import { ContentGrid } from "../components/contentgrid";
import { Header } from "../components/header";
import { Overview } from "../components/overview";
import { ContentGridTwo } from "../components/contentgridtwo";
import { ContentGridThree } from "../components/contentgridthree";

const Sanaa = () => {
  return (
    <>
      <Header
        tags={["Brand Design", "Package Design", "Social Media", "Cosmetics"]}
        bgColor="#B2333F"
        textColor="#fff"
        tagline="Skin &nbsp;  and &nbsp; hair &nbsp; care, &nbsp; tailored &nbsp; to &nbsp; the &nbsp; African &nbsp; woman."
        imageSrc="/sanaa/sanaa0.jpg"
        title="Sanaa"
      />
      <div className="w-[95%] mx-auto">
        <Overview
          colors={["#D7C9CD", "#B2333F"]}
          overview={`Sanaa Beauty Limited is a beauty brand designed for the various African skin and hair types. The goal with this project was to create a brand that represents the beauty and pride of the African woman and could redefine beauty standards for African women.<br/><br/>I worked with Sanaa’s team on building a brand that expresses the meaning of the Arabic Word, Brightness and Radiance while still appealing to the African Women the products cater to.`}
          personality={["Elegant", "Radiant", "Soft"]}
          services={[
            "Brand Design",
            "Brand Identity",
            "Packaging",
            "Social Media",
          ]}
          typefaces={["GT Super Display"]}
        />
        <BlackGrid
          details="In a bid to make data driven design decisions, I created a survey and had conversations with 8 African women living in different parts of the world. After the interviews, I had a stronger understanding of their needs, problems and what design decisions should be made."
          imgSrc="/sanaa/sanaareviews.png"
          bgColor="#B2333F"
        />
        <div className="hidden xl:block h-[80vh] rounded-xl mx-auto bg-[url('/sanaa/sanaam.jpg')] bg-[60%] w-[100%]  bg-fixed mb-20"></div>
        <ContentGrid
          title="Brand Design"
          headerText="Sanaa: Brightness, Radiance"
          details={`The Sanaa logo is a Wordmark logo (Gt Super Display font) with opulent curves. I selected the font because it communicated the elegance, radiance, expressiveness and beauty of African women and looked great everywhere. The \`S\` is slightly modified and slanted to be more feminine and inviting.<br/><br/>The colours were selected to match the major ingredients in Sanaa’s product line, causing associations with natural, earthy and nutritious condiments.`}
          imgSrcs={["/sanaa/SB.jpg", "/sanaa/sanaa11.jpg"]}
          designSvg="/laptopwork.svg"
        />
        <Image
          alt=""
          className="w-full shadow-xl mb-20"
          height={1000}
          width={1000}
          priority
          src="/sanaa/sanaa12.gif"
        />
        <ContentGridTwo
          title="Packaging Design"
          headerText="Capturing the elegance, expressiveness and beauty of African women"
          details="I took a lot of inspiration from the elegance and vibrancy of the women I spoke to. The sweet colours and curvy font clearly make Sanaa targeted at women and allows a lot of room for expressing different packaging options for the products that Sanaa provides."
          designSvg="/beverage.svg"
          imgSrcs={[
            "/sanaa/sana1.jpg",
            "/sanaa/sana2.jpg",
            "/sanaa/sana3.jpg",
            "/sanaa/sana4.jpg",
            "/sanaa/sana5.jpg",
          ]}
        />
        <ContentGridThree
          title="Social Media"
          headerText="Inclusive Marketing "
          details={`I worked on a campaign focused on educating beginners on possible fits with Sanaa’s product line, each post was targeted at a particular skin/hair type, with a last slide that explains why a certain product would work well for certain skin/hair.<br/><br/>I also worked on attractive billboard ads for use in Malls and Spas as part of pre-launch marketting efforts.`}
          imgSrcs={[
            "/sanaa/sanamedia1.jpg",
            "/sanaa/sanamedia2.jpg",
            "/sanaa/billboard.jpg",
          ]}
          designSvg="/smartphone.svg"
        />
      </div>
    </>
  );
};

export default Sanaa;
