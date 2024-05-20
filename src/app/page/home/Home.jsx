import React from "react";
import SwiperComponent from "../../../components/swiper/Swiper";
import "./home.css";
import Content from "./content/Content";
export default function Home() {
  return (
    <div>
      <div className="home-container">
      <div id="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=966500513512"
            target="_blank"
            id="toggle1"
            rel="noopener noreferrer"
            className="wtsapp"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
        <div className="home">
          <SwiperComponent></SwiperComponent>
        </div>
      </div>
      <Content title="home"></Content>
    </div>
  );
}
