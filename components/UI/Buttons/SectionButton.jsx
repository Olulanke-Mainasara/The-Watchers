import Button from "./Button";
import React from "react";

function SectionButton() {
  return (
    <Button
      isLink={true}
      href={"/categories"}
      title={"View categories"}
      type={"Section"}
    >
      Start reading
    </Button>
  );
}

export default SectionButton;
