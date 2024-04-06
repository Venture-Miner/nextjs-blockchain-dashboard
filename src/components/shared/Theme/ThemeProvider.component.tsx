import React from "react";
import { ThemeProvider } from "next-themes";

const ThemeProvide: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProvide;

interface Props {
  children: JSX.Element;
}
