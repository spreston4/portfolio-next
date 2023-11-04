import * as React from "react";
import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Link = ({ children, className, href }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`body-large font-bold hover-translate ${className}`}
    >
      {children}
    </NextLink>
  );
};

export default Link;
