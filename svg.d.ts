declare module "*.svg" {
  import React, { FC, SVGProps } from "react";
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
