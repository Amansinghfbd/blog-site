import React from "react";
import "./Article2.css";
import A1 from "../../assets/A1.svg";
import A2 from "../../assets/A2.svg";
import A3 from "../../assets/A3.svg";
import A4 from "../../assets/A4.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article2 = () => {
  //Data passed to the cards which we want to render below
  const data = [
    {
      id: 1,
      img: A1,
      text: "UX/UI",
    },
    {
      id: 2,
      img: A2,
      text: "React",
    },
    {
      id: 3,
      img: A3,
      text: "PHP",
    },
    {
      id: 4,
      img: A4,
      text: "JavaScript",
    },
  ];

  return (
    <div className="Article2container">
      <div className="Article2conatiner__bloglist">
        <div className="Article2conatiner__bloglist--title">
          Reading blog list
        </div>
        <div className="Article2conatiner__bloglist--images">
          {data.map((i) => (
            <div className="Article2conatiner__bloglist--images" key={i.id}>
              <LazyLoadImage src={i.img} alt="img1" className="Article2conatiner__bloglist__images--img"/>
              <div className="Article2conatiner__bloglist__images--textbox">
                <div className="Article2conatiner__bloglist__images__textbox--text">
                  {i.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article2;
