import { CSSProperties } from "react";
import Card from "./Card";
import { ReactNode } from "react";
import data from "./data";

type CardProps = {
  Component: ReactNode;
};

const List = { ...[data.result.liteAdList] };

const CardGridLayout = (props: CardProps) => {
  const CardGridLayoutStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };
  return <section style={CardGridLayoutStyle}>props.Component</section>;
};

export default CardGridLayout;
