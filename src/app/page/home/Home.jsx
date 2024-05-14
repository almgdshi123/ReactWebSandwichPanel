import React from "react";
import Header from "../../../components/header/Header";
import SwiperComponent from "../../../components/swiper/Swiper";
import "./home.css";
import Content from "./content/Content";
import Footer from "../../../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="home-container">
      <div id="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=31633854062"
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
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
