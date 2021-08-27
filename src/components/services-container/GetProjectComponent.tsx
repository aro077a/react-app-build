import { FC } from "react";

import { DescriptionService } from "../model";

const GetProjectComponent: FC<DescriptionService> = ({title, description}) => { 

  return (
    <>
      <div className="get-project__content">
             <h1 className="get-project__content--title">{title}</h1>
             <p className="get-project__content--text" dangerouslySetInnerHTML = {{__html: description}}></p>
             <button className="get-project__content--button">Get in touch</button>
         </div>
    </>
  );
};

export default GetProjectComponent;
