import { FC } from "react";

import { ImageService } from "../model";

const ImageComponent: FC<ImageService> = ({ image, description }) => {
  return (
    <>
      <div className="image__content">
        <img src={image} alt="aaa" className="image__content--image" />
        <p className="image__content--description">{description}</p>
      </div>
    </>
  );
};

export default ImageComponent;
