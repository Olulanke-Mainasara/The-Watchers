import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Button from "./Button";

function CardButton({ text }) {
  return (
    <Button isLink={true} href={"#"} title={"View articles"} type={"Card"}>
      {text} <FaChevronRight />
    </Button>
  );
}

export default CardButton;
