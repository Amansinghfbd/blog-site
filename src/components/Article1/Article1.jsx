import React from "react";
import "./Article1.css";
import laptopimg from "../../assets/new.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article1 = () => {
  return (
    <section className="Article1-container">
      <div className="Article1-container__div1">
        <div className="Article1-container__div1--text1">
          By Themadbrains in{" "}
          <span className="Article1-container__div1__text1--span">
            inspiration
          </span>
        </div>
        <div className="Article1-container__div1--text2">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </div>
        <div className="Article1-container__div1--text3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </div>
        <button className="Article1-container__div1--btn">
          Start learning now
        </button>
      </div>
      <div className="Article1-container__div2">
        <LazyLoadImage src={laptopimg} alt="laptop-img" className="Article1-container__div2--laptopimg"/>
      </div>
    </section>
  );
};

export default Article1;
