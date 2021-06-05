import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";
import InfoCard from "./InfoCard";
// ..
AOS.init();

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginTop: "4rem", width: "22rem" }} class="title is-3">
        Services
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "4rem",
        }}
      >

<InfoCard/>
        {/** Testimonials */}
        <ServiceCard p=" CONSULTATION "  />
        <ServiceCard
          p="BRAND MANAGEMENT"/>
        <ServiceCard p='DIGITAL MARKETING
' />
        <ServiceCard p='INTELLECTUAL PROPERTY
'/>
        
        <ServiceCard p='PRODUCT SOLUTIONS
'/>
        
        <ServiceCard p='FINANCIAL LITERACY
'/>
        
      </div>
    </div>
  );
};

export default Services;
