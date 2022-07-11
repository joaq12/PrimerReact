import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import Footer from "./Footer";
import "../assets/css/app.css";

function ContentWrapper() {
  return (
    <div id="wrapper">
      <TopBar />
      <ContentRowTop />
      <Footer />
    </div>
  );
}
export default ContentWrapper;
