import React from "react";
import "../App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import InfoCard from "../components/InfoCard";
import NoCard from "../components/NoCard";
import BigButton from "../components/BigButton";

AOS.init();

function TopQuestion() {
  const [displ, setDisplayed] = React.useState("none");
  const [displ2, setDisplayed2] = React.useState("none");
  const index = Math.floor(Math.random() * 3 + 1);

  console.log(index);
  const randomQuestions = [
    { question1: "", answer1: "", answer2: "", answer3: "" },
    {
      question1: "Temperature check. How are you feeling today?",
      answer1: "Energized",
      answer2: "Overwhelmed",
      answer3: "I'm Not Sure",
    },
    {
      question1: "Do you consider yourself organized?",
      answer1: "yes",
      answer2: "no",
      answer3: "Does Organized Chaos count?",
    },
    {
      question1: "Before we get started... Would you hire yourself?",
      answer1: "I am the boss",
      answer2: "I'm not sure",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="image_roll"
    >
      <h1
        data-aos="fade-up"
        data-aos-duration="3000"
        class="centerMargin"
        style={{ marginBottom: "4rem", color: "white" }}
        class="title is-1"
      >
        {randomQuestions[`${index}`].question1}
      </h1>

      {/*Info card to get customer info and start chat*/}
      <div
        style={{
          position: "absolute",
          display: `${displ}`,
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <InfoCard
          title="We love working with leaders"
          message="A tone agent will be with you shortly, in the meantime you can provide us with the best way to contact you."
        />
      </div>

      <div
        style={{
          position: "absolute",
          display: `${displ2}`,
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <NoCard
          title="Let's break down why you feel this way, together."
          message="Take our questionnaire and a Tone Agent will get back to you as soon as possible. We'll use your responses to help guide us as we navigate the development of your brand."
        />
      </div>

      {/* Big buttons for header page*/}

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => {
            setDisplayed("flex");
          }}
        >
          <BigButton title={randomQuestions[`${index}`].answer1} />
        </div>

        <div
          onClick={() => {
            setDisplayed2("flex");
          }}
        >
          <BigButton title={randomQuestions[`${index}`].answer2} />
        </div>
        {randomQuestions[`${index}`].answer3 ? (
          <div
            onClick={() => {
              setDisplayed2("flex");
            }}
          >
            <BigButton title={randomQuestions[`${index}`].answer3} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TopQuestion;
