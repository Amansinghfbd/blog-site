import React from "react";
import "./Article4.css";
import pqr1 from "../../assets/image1.png";
import pqr2 from "../../assets/image2.png";
import pqr3 from "../../assets/image3.png";
import pqr4 from "../../assets/image4.png";
import { PiSquaresFour } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import logo from "../../assets/logo-image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article4 = () => {
  //Data passed to the cards below rendered
  const data = [
    {
      id: 1,
      pot: pqr1,
      title: "AWS Certified solutions Architect",
      body: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 80,
      price1: 100,
      month: 1,
      tag: "Design",
    },
    {
      id: 2,
      pot: pqr2,
      title: "SAS Programming Course Beginner",
      body: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 70,
      price1: 120,
      month: 3,
      tag: "DSA",
    },
    {
      id: 3,
      pot: pqr3,
      title: "Java Programming Course Beginner",
      body: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 30,
      price1: 130,
      month: 4,
      tag: "Code",
    },
    {
      id: 4,
      pot: pqr4,
      title: "Linux Programming Course Beginner",
      body: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 50,
      price1: 90,
      month: 5,
      tag: "AI",
    },
  ];

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header1">Marketing Articles</div>
        <div className="container__header2">See all</div>
      </div>
      <div className="container__card">
        {data.map((element) => (
          <div className="container__card--box" key={element.id}>
            <div>
              <LazyLoadImage
                src={element.pot}
                alt=" "
                className="container__card--image"
              />
            </div>

            <div className="container__card--caption">
              <div className="container__card--caption--inner">
                <PiSquaresFour
                  style={{ color: "#D9D9D9", height: "21px", width: "21px" }}
                />
                <div className="container__card--caption--text">
                  {element.tag}
                </div>
              </div>
              <div className="container__card--caption--inner">
                <BsClock
                  style={{ color: "#D9D9D9", height: "21px", width: "21px" }}
                />
                <div className="container__card--caption--text">{`${element.month} Month`}</div>
              </div>
            </div>

            <div className="container__card--title">{element.title}</div>

            <div className="container__card--body">{element.body}</div>

            <div className="container__card--footer">
              <div className="container__card--logo">
                <div>
                  <LazyLoadImage
                    src={logo}
                    alt="logo"
                    className="container__card__logo--image"
                  />
                </div>
                <div className="container__card__logo--name">Lina</div>
              </div>
              <div className="container__card--price">
                <div className="container__card--price1">{`$${element.price1}`}</div>
                <div className="container__card--price2">{`$${element.price}`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article4;
