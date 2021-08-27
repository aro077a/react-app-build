import { FC, useEffect, useState } from "react";

import Slide from "react-reveal/Fade";
import { v4 as uuidv4 } from "uuid";

import { CardImages } from "./fakeData";

interface CardItemsProps {
  sortLabelName: string;
}

const CardItems: FC<CardItemsProps> = ({ sortLabelName }) => {
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    return sortLabelName === "all" ? setIsSorted(false) : setIsSorted(true);
  }, [sortLabelName]);

  return (
    <div className="cardItems__wrapper">
      {CardImages && 
        CardImages.filter((item) =>
          !isSorted ? item.type !== sortLabelName : item.type === sortLabelName
        )
          .map((card, i) => (
            <Slide bottom delay={(i + 1) * 200} distance="50px">
              <div key={uuidv4()} className='cardItems__wrapper__card' >
                  <div className='cardItems__wrapper__card--imageTitle'>
                    <h1>{card.title}</h1>
                  </div>
                  <div className='cardItems__wrapper__card--image'>
                    <img src={card.image} alt='cardImage' />
                  </div>
                  <div className='cardItems__wrapper__card--imageFooter'>
                    <h4>{card.description}</h4>
                  </div>
              </div>
            </Slide>
          ))}
    </div>
  );
};
 
export default CardItems;
 