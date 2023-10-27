import React, { useState } from "react";
import "./Article3.css";
import logo from "../../assets/logo-image.png";
import demo from "../../assets/demoimg1.png";
import demo1 from "../../assets/demoimg2.png";

import { FaAngleLeft, FaAngleRight, FaEye } from "react-icons/fa"; //icons imported from react-icons library
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article4 = () => {
  const [trans, setTrans] = useState(0);

  //function used to move cards towards left

  const handleLeft = () => {
    if (trans === 0) {
      setTrans(0);
    } else {
      setTrans((prev) => {
        return (prev += 111);
      });
    }
  };

  //function used to move cards towards Right

  const handleRight = () => {
    if (trans === -222) {
      setTrans(-222);
    } else {
      setTrans((prev) => {
        return (prev -= 111);
      });
    }
  };

  // data passed to map function to render cards
  const articleData = [
    {
      id: 1,
      name: "Article1",
      image: demo,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      logo: logo,
      body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "267,232",
    },
    {
      id: 2,
      name: "Article2",
      image: demo1,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      logo: logo,
      body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
    {
      id: 3,
      name: "Article3",
      image: demo,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      logo: logo,
      body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "234,232",
    },
    {
      id: 4,
      name: "Article4",
      image: demo1,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      logo: logo,
      body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
  ];

  return (
    <div className="Article4-container">
      <div className="Article4-container__title">
        <div className="Article4-container__title1">Related Blog </div>
        <div className="Article4-container__title2">See all</div>
      </div>
      <div className="Article4-container__content">
        {articleData.map((element) => {
          return (
            <div
              key={element.id}
              className="Article4-container__content--card"
              style={{ transform: `translateX(${trans}%)` }}
            >
              <div className="Article4-container__content__card--inner">
                <LazyLoadImage
                  src={element.image}
                  alt="content"
                  className="Article4-container__content__card__inner--img"
                />
                <p className="Article4-container__content__card__inner--title">
                  {element.title}
                </p>
                <div className="Article4-container__content__card__inner--logo">
                  <LazyLoadImage
                    src={element.logo}
                    alt="content"
                    className="Article4-container__content__card__inner--logo1"
                  />
                  <div className="Article4-container__content__card__inner--logo-text">
                    Lina
                  </div>
                </div>
                <div className="Article4-container__content__card__inner--body">
                  {element.body}
                </div>
                <div className="Article4-container__content__card__inner--footer">
                  <div className="Article4-container__content__card__inner__footer--text">
                    Read more
                  </div>
                  <div className="Article4-container__content__card__inner__footer--Review">
                    <div>
                      <FaEye style={{ color: "#49BBBD" }} />
                    </div>
                    <div className="Article4-container__content__card__inner--view">
                      {element.views}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-wrapper">
        <div onClick={handleLeft} className="button-wrapper__btn--left">
          <FaAngleLeft />
        </div>
        <div onClick={handleRight} className="button-wrapper__btn--right">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Article4;
