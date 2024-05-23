import React from "react";
import Content from "./content/Content";

import SwiperComponent from "../../../components/swiper/Swiper";
import "./home.css";
export default function Home() {
  return (
    <div>
      <div className="home-container">
 
        <div className="home"  >
          <SwiperComponent></SwiperComponent>
        </div>
      </div>
      <Content  title="home"></Content>
    </div>
  );
}
