import React from "react";

const baseStyles = {
  H1: "text-[64px]  leading-[45px]", //✔︎
  H2: "text-[40px]  leading-10 ", //✔︎
  H3: "text-2xl leading-9 font-medium",
  H4: "text-2xl leading-8 font-medium",
  H5: "text-xl font-bold leading-[30px]", //✔︎
  H6: "text-lg font-bold leading-[27px]", //✔︎
  H6R: "text-lg font-normal leading-[27px]", //✔︎
  H7: "text-base leading-6 font-medium",
  Body1R: "text-[20px] font-normal leading-6", //✔︎
  Body1B: "text-[20px] font-bold leading-6", //✔︎
  Body2R: "text-sm font-normal leading-[21px]", //✔︎
  Body2R1: "text-[18px] font-normal leading-[21px]", //✔︎
  Body2B: "text-sm font-bold leading-[21px]", //✔︎
  Body3R: "text-xs font-normal leading-[18px]", //✔︎
  Body3B: "text-xs font-bold leading-[18px]", //✔︎
  Link1: "text-base leading-6 font-normal",
  Link2: "text-sm leading-5 font-normal",
  Link3: "text-xs leading-4 font-normal",
};

const createComponent = (tag: string, baseClass: string) => {
  const Component = ({ className = "", ...props }) =>
    React.createElement(tag, {
      className: `${baseClass} ${className}`,
      ...props,
    });
  return Component;
};

const Typography = {
  H1: createComponent("h1", baseStyles.H1),
  H2: createComponent("h2", baseStyles.H2),
  H3: createComponent("h3", baseStyles.H3),
  H4: createComponent("h4", baseStyles.H4),
  H5: createComponent("h5", baseStyles.H5),
  H6: createComponent("h6", baseStyles.H6),
  H6R: createComponent("h6", baseStyles.H6),
  H7: createComponent("h7", baseStyles.H7),
  B1R: createComponent("p", baseStyles.Body1R),
  B1B: createComponent("p", baseStyles.Body1B),
  B2R: createComponent("p", baseStyles.Body2R),
  B2R1: createComponent("p", baseStyles.Body2R1),
  B2B: createComponent("p", baseStyles.Body2B),
  B3R: createComponent("p", baseStyles.Body3R),
  B3B: createComponent("p", baseStyles.Body3B),
  L1: createComponent("a", baseStyles.Link1),
  L2: createComponent("a", baseStyles.Link2),
  L3: createComponent("a", baseStyles.Link3),
};

export default Typography;
