import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m";
  color?: "ghost" | "red" | "green" | "grey" | "primary";
  href?: string;
  children: ReactNode;
}
