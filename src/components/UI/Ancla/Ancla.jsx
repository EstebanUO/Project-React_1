import React from "react";

export const Ancla = (styles, reference, textAncla) => {
  return (
    <a className={styles} href={reference}>
      {textAncla}
    </a>
  );
};
