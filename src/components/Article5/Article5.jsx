import React from "react";
import "./Article5.css";
import xyz1 from "../../assets/blog-img1.png";
import xyz2 from "../../assets/blog-img2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article5 = () => {
  return (
    <div className="blog-container">
      <div className="blog-container__image">
        <LazyLoadImage
          alt="blog1"
          src={xyz2}
          className="blog-container__image"
        />
      </div>
      <div className="blog-container__title">
        Why Swift UI Should Be on the Radar of Every Mobile Developer
      </div>
      <div className="blog-container__paragraph">
        <p>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <p>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place. TOTC is a platform
          that allows educators to create online classes whereby they can store
          the course materials online; manage assignments, quizzes and exams;
          monitor due dates; grade results and provide students with feedback
          all in one place. TOTC is a platform{" "}
        </p>
        <p>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place. TOTC is a platform
          that allows educators to create online classes whereby they can store
          the course materials online; manage{" "}
        </p>
      </div>
      <div className="blog-container__tags">
        <div className="blog-container__tags--tag">affordable </div>
        <div className="blog-container__tags--tag">Stunning</div>
        <div className="blog-container__tags--tag">making</div>
        <div className="blog-container__tags--tag">madbrawns</div>
      </div>
      <div className="blog-container__line"></div>
      <div className="blog-container__footer">
        <div className="blog-container__footer1">
          <div>
            <LazyLoadImage
              src={xyz1}
              alt="blog2"
              className="blog-container__footer--img"
            />
          </div>
          <div className="blog-container__footer--text">
            <div className="blog-container__footer--text1">Written by</div>
            <div className="blog-container__footer--text2">Lina</div>
          </div>
        </div>
        <div className="blog-container__footer2">
          <button className="blog-container__footer2--btn">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Article5;
