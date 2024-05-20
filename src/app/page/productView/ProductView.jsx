import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { dataDetails } from "../../../components/dataDetails";
import "./productView.css";

export default function ProductView() {
  const { href: herfName, id: productId } = useParams();

  const [imgId, setImgId] = useState(1);
  const imgShowcaseRef = useRef(null);

  // معالج النقر
  const handleClick = (event, newImgId) => {
    event.preventDefault();
    setImgId(newImgId);
  };

  useEffect(() => {
    const slideImage = () => {
      const displayWidth =
        imgShowcaseRef.current.querySelector("img:first-child").clientWidth;
      imgShowcaseRef.current.style.transform = `translateX(${
        (imgId - 1) * displayWidth
      }px)`;
    };

    slideImage();

    // Add resize event listener
    window.addEventListener("resize", slideImage);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [imgId]);

  return (
    <div className="container">
      <div className="card-wrapper">
        {dataDetails.map((item) =>
          item.href === herfName
            ? item.data.map((data) =>
                data.id.toString() === productId ? (
                  <div className="card-details" key={data.id}>
                    {/*  card right  */}
                    <div className="product-imgs">
                      <div className="img-display">
                        <div className="img-showcase" ref={imgShowcaseRef}>
                          {data.imagedata.map((image, imageId) => (
                            <img
                              src={image.image}
                              alt={image.title}
                              key={imageId}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="img-select">
                        {data.imagedata.map((image, index) => (
                          <div className="img-item" key={index}>
                            <a
                              href="/"
                              data-id={index + 1}
                              onClick={(e) => handleClick(e, index + 1)}
                            >
                              <img src={image.image} alt={image.title} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/*  card left  */}
                    <div className="product-content">
                      <h2 className="product-title">{data.title} </h2>
                      <a href="/" className="product-link">
                        {item.title}
                      </a>
                      <div className="product-rating">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <span>4.7(21)</span>
                      </div>

                      <div className="product-price">
                        <p className="last-price">
                          السعر السابق: <span>$257.00</span>
                        </p>
                        <p className="new-price">
                          السعر الجديد: <span>$249.00 (5%)</span>
                        </p>
                      </div>

                      <div className="product-detail">
                        <h2>حول الخدمة: </h2>
                        <p>
                          الساندوتش بانل بكونه عبارة عن ألواح مركبة تتألف من
                          طبقتين خارجيتين من الصاج المجلفن أو الألومنيوم، تحيطان
                          بطبقة عازلة من مواد مثل البولي يوريثين، البوليستيرين،
                          الصوف الصخري، أو الصوف الزجاجي1. هذه الألواح خفيفة
                          الوزن ولكنها توفر مقاومة عالية وعزل حراري جيد، مما
                          يجعلها مثالية للمحلات التجارية التي تحتاج إلى تحكم
                          فعال في درجات الحرارة.
                        </p>
                        <p>
                        مميزات الساندوتش بانل:


                        </p>
                        <ul>
                          <li>
                          مقاومة عالية: <span>تتحمل الأحمال الثقيلة وتقاوم الظروف الجوية القاسية.</span>
                          </li>
                          <li>
                          عزل حراري ممتاز: <span>يحافظ على درجة حرارة مثالية داخل المتجر، مما يوفر في استهلاك الطاقة. </span>
                          </li>
                          <li>
                          تركيب سريع وسهل:  <span>يسهل تركيبها ولا تحتاج إلى صيانة مكثفة، مما يقلل من تكاليف العمالة والوقت.</span>
                          </li>
                          <li>
                          تصميم متنوع: <span>تأتي بألوان وأنماط مختلفة تتناسب مع الذوق العصري والتصميم </span>
                          </li>
                          <li>
                             التوصيل مجاني: <span>مجاني</span>
                          </li>
                        </ul>
                      </div>

                      <div className="purchase-info">
                        <input type="number" min="0" value="1" />
                        <button type="button" className="btn">
                        تسوق <i className=" ri-shopping-cart-fill"></i>
                        </button>
                        <button type="button" className="btn">
                          اضافة للمفضلة <i className="ri-heart-line"></i>
                        </button>
                      </div>

                      <div className="social-links">
                        <p>مشاركة: </p>
                        <a href="/">
                          <i className="ri-facebook-line"></i>
                        </a>
                        <a href="/">
                          <i className="ri-twitter-line"></i>
                        </a>
                        <a href="/">
                          <i className="ri-instagram-line"></i>
                        </a>
                        <a href="/">
                          <i className="ri-whatsapp-line  "></i>
                        </a>
                        <a href="/">
                          <i className="ri-pinterest-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null
              )
            : null
        )}
      </div>

      {/* {dataDetails.map((item, index) =>
            item.href === herfName ? (
              <div>
                <h1>{item.href}</h1>

                {item.data.map((data, id) =>
                  data.id.toString() === productId ? <h1>{data.id}</h1> : null
                )}
              </div>
            ) : null
          )} */}
    </div>
  );
}
