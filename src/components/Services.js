import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";
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
        {/** Testimonials */}
        <ServiceCard
          p=" CONSULTATION "
          message=" You’re not just any creative, and this is not your typical consultation. The Tone Agency offers individualized roadmaps, tailored to your brands unique vision. We ask the right questions to get you closer to the answers needed to elevate your creative career. #ToneMapping
Roadmapping. Tonemap 
"
        />
        <ServiceCard
          p="BRAND MANAGEMENT"
          message="Get in tune with your tone.  What makes your brand different from the other brands? What markets are you serving? What problems are you solving? These are the questions we need to ask in order for your brand or business to have an impact on the world. Work with The Tone Agency team members to turn your brand into a household name. #ToneUp

Getting in tune with your tone. 
"
        />
        <ServiceCard
          p="DIGITAL MARKETING
"
          message="Imagine if there was a way to contact every single person on the planet, There is; The internet. We utilize fundamental marketing campaigns to help creatives develop an organic following that’s dedicated to their brand. We take your content, package it nicely, and deliver it to your audience. #SetTheTone"
        />
        <ServiceCard
          p="INTELLECTUAL PROPERTY
"
          message="Your creations are your life’s work. Confused about how to protect it? We were too. We explain this process in clear terms so that you feel up-to-date with the legal parameters surrounding your work. 
"
        />

        <ServiceCard
          p="PRODUCT SOLUTIONS
"
          message="There’s more to your brand than just a T-shirt with your name on it.  Did you know that your lifestyle is profitable too? More times than not, you and your supporters share the same interests. With in-house manufacturing, TTA helps creatives develop products that build upon that relationship and expand brand awareness. "
        />

        <ServiceCard
          p="FINANCIAL LITERACY
"
          message="Have you ever lost your keys in your pocket? Believe it or not, a lot of financial literacy is hidden in plain sight. We help creatives fund their vision by turning their money into employees instead of obstacles. In other words, we find ways to make your money, work for you. "
        />
      </div>
    </div>
  );
};

export default Services;
