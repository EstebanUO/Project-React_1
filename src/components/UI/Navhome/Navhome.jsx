import React from "react";
import { Ancla } from "../Ancla/Ancla";

export const Navhome = () => {
  return (
    <nav className="navHome">
      <Ancla
        styles="contador"
        reference="https://www.google.com/"
        textAncla="Home"
      />
      <Ancla styles="listNames" reference="" textAncla="Lista Nombres" />
      <Ancla styles="changeStyle" reference="" textAncla="ChangeStyle" />
    </nav>
  );
};
