import React from "react";

const ServiceCard = (props) => {
  const [see, setSee] = React.useState("none");
  const [seeMore, setSeeMore] = React.useState("flex");
  const [boxSize, setBoxSize] = React.useState("6rem");
  
  return (
    <div
      style={{ width: "16rem", height: `${boxSize}`, margin: "2rem 1rem" }}
      class="card"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        class="card-content"
      >
        <div style={{ height: "14rem" }}>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{props.p}</p>
          <a
            style={{
              display: `${seeMore}`,
              fontSize: "14px",
              fontWeight: "bold",
            }}
            onClick={() => {
              setSee("flex");
              setSeeMore("none");
              setBoxSize("22rem");
            }}
          >
            See More
          </a>
          <p
            style={{ fontSize: "13px", fontWeight: "bold", display: `${see}` }}
          >
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
