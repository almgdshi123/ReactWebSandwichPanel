import React from "react";
import SwiperComponent from "../../../components/swiper/Swiper";
import "./home.css";
import Content from "./content/Content";
export default function Home() {
  return (
    <div>
      <div className="home-container">
 
        <div className="home">
          <SwiperComponent></SwiperComponent>
        </div>
      </div>
      <Content title="home"></Content>
    </div>
  );
}
