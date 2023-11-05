import { BlackGrid } from "../components/blackgrid";
import { ContentGrid } from "../components/contentgrid";
import { ContentGridThree } from "../components/contentgridthree";
import { ContentGridTwo } from "../components/contentgridtwo";
import { Header } from "../components/header";
import { Overview } from "../components/overview";

const Famasi = () => {
  return (
    <>
      <Header
        tags={[
          "Brand Design",
          "Packaging",
          "Marketing",
          "Website Design",
          "Pharmaceuticals",
        ]}
        bgColor="#073043"
        textColor="white"
        tagline="Automated &nbsp;medication &nbsp;management &nbsp;for &nbsp;patients &nbsp;in &nbsp;Africa."
        imageSrc="/fa/famablue.jpg"
        title="Famasi Africa"
      />
      <div className="w-[95%] mx-auto">
        <Overview
          colors={["#132F40", "#EBA832"]}
          overview={`
        <p>Famasi Africa is a medication management service provider that helps patients with easy and seamless access to medication, particularly people with chronic health conditions; ensuring they never run out of  medicine. Famasi works in an interesting intersection between traditional pharmaceuticals and telemedicine, it’s branding needed to project strength and competence to its pharmaceutical partners while portraying warmth, friendliness and compassion to its customers.</br></br>Famasi is a first of its kind in Africa, its goal is not to be just an online medicine delivery service but  a strong, trusted friend that eases the process of living healthier lives for its customers. I was hired by Famasi in late 2021 to help bring this trusted and friendly brand to life.</p>
        `}
          personality={["Trustworthy", "Friendly"]}
          services={[
            "Brand Design",
            "Packaging",
            "Brand Identity",
            "Social Media",
          ]}
          typefaces={["Avante Garde Book", "Merriweather Bold"]}
        />
        <BlackGrid
          bgColor="#132F40"
          details=" I set out to develop a brand that has the perception of strength and competence while also projecting a certain warmth and friendliness that would appeal to Famasi partners and customers.
The founders of the company had indicated that they’d prefer a font that that leverages the clever company name so I decided to use a wordmark and started exploring possible fonts for the wordmark."
          imgSrc="/fa/faprocess.jpeg"
        />
        <div className="h-[80vh] rounded-xl mx-auto bg-[url('/fa/famasi15.jpg')] bg-[60%] w-[100%]  bg-fixed mb-20"></div>
        <ContentGrid
          title="Brand Design"
          designSvg="/beverage.svg"
          details={`<p>I chose the Merriweather Bold font because it has a strong, sharp feel while being warm and human, a delicate balance that the Famasi brand had to find.</br></br> I selected colours that towed the same lines of Strength and Friendliness a bid to appeal to both partner companies and customers. </p>`}
          imgSrcs={["/fa/f40.jpg", "/fa/fa23.jpg"]}
        />
        <ContentGridTwo
          headerText=""
          title="Packaging Design"
          designSvg="/lifting.svg"
          details={`I wanted to make the packaging delightful and easy to use for customers, which i did by designing really vibrant delivery boxes that are a joy to look at. <br/><br/> I also included tags with customisable messaging for each delivery, making the customers feel a bit more ownership/loyalty towards the brand.`}
          imgSrcs={["/fa/famasi9.jpg", "/fa/famasi10.jpg", "/fa/famasi8.jpg"]}
        />
        <ContentGridThree
          title="Brand Guidelines"
          designSvg="/drawing.svg"
          headerText="Maintaining a consistent Brand Identity"
          details="Being a startup, having a strong brand identity was a top priority to Famasi. I designed a brand guide that contains the brand colours, proper uses of the logo on different backgrounds and mistakes to avoid while using the brand."
          imgSrcs={["/fa/famasi4.jpg"]}
        />

        <ContentGridTwo
          title="Marketing"
          designSvg="/orating.svg"
          headerText="Getting the Word Out"
          details={`<p>In order to drive marketing efforts, I collaborated with a copywriter and social media marketing expert to design beautiful fliers, post cards and gifs for use on social and print media.<br/><br/> I also worked on designs for branded company swag to be given to potential partners at networking events.</p>`}
          imgSrcs={[
            "/fa/famasi2.jpg",
            "/fa/famasi5.jpg",
            "/fa/famasi7.jpg",
            "/fa/fa15.jpg",
            "/fa/fat3.jpg",
          ]}
        />
      </div>
    </>
  );
};

export default Famasi;
