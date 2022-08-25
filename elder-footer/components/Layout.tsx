import React from "react";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full p-0">
      {props.children}
      <Footer />
    </div>
  );
}
