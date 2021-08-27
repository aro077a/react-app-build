import { FC } from "react";

import { DescriptionService } from "../model";

const DescriptionComponent: FC<DescriptionService> = ({
  title,
  description,
}) => {
  return (
    <>
      <div className="description__content">
        <h1
          className="description__content--title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p
          className="description__content--text"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </>
  );
};

export default DescriptionComponent;
