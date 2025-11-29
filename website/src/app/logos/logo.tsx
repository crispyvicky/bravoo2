import React from "react";

export type IconType = {
  className?: string;
};

export const LogoBasement = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 251 36"
    >
      <text
        x="0"
        y="32"
        fill="#fff"
        style={{
          fontFamily: "var(--font-basement-grotesque)",
          fontWeight: 700,
          fontSize: "30px",
        }}
      >
        BRAVOO.IN
      </text>
    </svg>
  );
};
