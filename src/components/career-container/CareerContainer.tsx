import { Link } from "react-router-dom";

import Career_bgImg from "../../assets/images/career_image.png";
import ContentDescription from "../reusable-components/ContentDescription";
import ImageContainer from "../reusable-components/ImageContainer";

import Offer from "./Offer";
import Position from "./Position";
import Values from "./Values";

const CareerContainer = () => {
  return (
    <div className="career__wrapper">
      <div className="career__wrapper__image">
        <ImageContainer img={Career_bgImg} />
      </div>
      <div className="career__wrapper__desc">
        <ContentDescription
          secondLine="BRAVE THINKERS
          WANTED"
          info="We’re fearless collaborators, and we’re looking for people with the skills and ambition 
          to make us even better."
        />
      </div>
      <Position />
      <Offer />
      <Values />
      <div className="career__wrapper__footer">
        <p>
          ARE YOU ALREADY A MEMBER? PLEASE <Link to="/">LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default CareerContainer;
