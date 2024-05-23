import React from "react";
import "./content.css";
import { dataContent } from "../../../../components/dataContent";

export default function Content({ title }) {
  return (
    <div>
      <section id="service">
        <DropdownItem title={title}></DropdownItem>
      </section>
    </div>
  );
}

 function DropdownItem(props) {
  const  renderContent = (item, index) => (
    <div className="subjcet-container" key={index}>
    
      <div className="poular-box">
        <h2>{item.title}</h2>
        {props.title === "home"? (
        <a href={"/product-sandwich/" + item.href} className="main-color" alt={item.alt}>
          المزيد من التفاصيل
        </a>): null}
      </div>
      <div className="subject-box grid">
        {item.data.map((data, index) => (
          <div className="card" key={index}>
            <div className="header">
              <div className="image">
                
                <img  src={data.image} alt={data.altimage }  loading="lazy"/>
                <a href={"/product-sandwich/" + item.href} className="tag" alt={item.alt+""+data.altimage}>{item.title}</a>
              </div>
              <div className="date">
                <span>{data.price}</span>
                <button  aria-label="مشاركة" className="menu-btn">
                  <i className="ri-share-line"></i>
                </button>
              </div>
            </div>
            <div className="info">
              <a rel="noopener noreferrer" href={'/prodcut-sandwich-details/' + item.href + '/' + data.id} className="block" alt={data.alt}>
                <span className="title ">
                  {data.description}{" "}
                </span>
              </a>
              <p className="description">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div>
      <section id="service">
        {dataContent.map((item, index) => (props.title === "home" || item.href === props.title) ? renderContent(item, index) : null)}
      </section>
    </div>
  );
  
}
