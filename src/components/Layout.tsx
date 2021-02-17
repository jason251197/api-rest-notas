import React from "react";
import { RouteProps } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../styles/layout.css";

interface ILayourRoutePropos extends RouteProps {
  text: string;
  head: string;
}

const Layout = ({ children, text, head }: ILayourRoutePropos) => {
  return (
    <>
      <Helmet>
        <title>{head} - CEIDUNS</title>
      </Helmet>
      <div className="relative bg-gray-200 md:min-h-screen animate__animated animate__fadeIn animate__faster">
        <div className="relative bg-transparent md:pt-24 pb-6 pt-6 full-body">
          <div className="px-4 md:px-6 mx-auto w-full">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
