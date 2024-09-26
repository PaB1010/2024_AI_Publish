import { CSSProperties, ReactNode } from "react";
import data from "./data";

type CardProps = {
  Component: ReactNode;
};

const Component = [data.result.liteAdList];

const Card = () => {
  const CardSTyle: CSSProperties = {
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "80vw",
    height: "200px",
    margin: "0 auto",
  };
  return <div style={CardSTyle}></div>;
};

export default Card;
