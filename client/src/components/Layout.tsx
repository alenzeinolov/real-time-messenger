import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children as any}</Container>
    </>
  );
};

export default Layout;
