import * as React from "react";
import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  href: string;
}

const Link = ({ children, className, external = false, href }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`body-large font-bold hover-translate ${className}`}
      target={external ? "_blank" : "_self"}
    >
      {children}
    </NextLink>
  );
};

export default Link;
