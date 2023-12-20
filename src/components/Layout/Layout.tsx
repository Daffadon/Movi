import { FC } from "react";
import Navbar from "../appbar/Navbar";
import Footer from "../appbar/Footer";
import ChildrenProps from "../../data/dto/childrenProps";

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
