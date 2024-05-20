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
  if (props.title === "home") {
    return (
      <div>
        <section id="service">
          {}
          {dataContent.map((item, index) => (
            <div className="subjcet-container" key={index}>
              <div className="poular-box">
                <h2>{item.title} </h2>
                <a href={"/product-page/"+item.href} className="main-color">
                  المزيد من التفاصيل
                </a>
              </div>
              <div className="subject-box grid">
                {item.data.map((data, index) => (
                  <div className="card" key={index}>
                    <div className="header">
                      <div className="image">
                        <img src={data.image} alt={data.title} />
                        <a href={"/product-page/"+item.href} className="tag">{item.title}</a>
                      </div>
                      <div className="date">
                        <span>مارس 2020</span>
                        <button className="menu-btn">
                          <i className="ri-share-line"></i>
                        </button>
                      </div>
                    </div>
                    <div className="info">
                      <a rel="noopener noreferrer" href={'/prodcut-details/'+item.href+'/'+data.id} className="block">
                        <span className="title main-color">
                          {data.description}{" "}
                        </span>
                      </a>
                      <p className="description">{data.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section id="service">
          {}
          {dataContent.map((item, index) =>
            item.href === props.title ? (
              <div className="subjcet-container" key={index}>
                <div className="poular-box">
                  <h2>{item.title} </h2>
              
                </div>
                <div className="subject-box grid">
                  {item.data.map((data, index) => (
                    <div className="card" key={index}>
                      <div className="header">
                        <div className="image">
                          <img src={data.image} alt={data.title} />
                          <a href={"/product-page/"+item.href} className="tag">{item.title}</a>
                        </div>
                        <div className="date">
                          <span>مارس 2020</span>
                          <button className="menu-btn">
                            <i className="ri-share-line"></i>
                          </button>
                        </div>
                      </div>
                      <div className="info">
                      <a rel="noopener noreferrer" href={'/prodcut-details/'+item.href+'/'+data.id} className="block">
                          <span className="title main-color">
                            {data.description}{" "}
                          </span>
                        </a>
                        <p className="description">{data.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </section>
      </div>
    );
  }
}
