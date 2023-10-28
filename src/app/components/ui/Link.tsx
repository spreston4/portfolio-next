import * as React from "react";
import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className="body-large font-bold duration-100 hover:-translate-y-0.5"
    >
      {children}
    </NextLink>
  );
};

export default Link;
