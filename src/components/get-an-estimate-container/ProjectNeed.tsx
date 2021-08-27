import { FC, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

import { estimateSelector, fetchEstimate } from "../../redux/features/estimate/estimateSlice";
import { estimateListData } from "../../redux/features/estimate/model";
// import Button from "../reusable-components/Button";

// import { getAnEstimateData } from "./fakeEstimateData";

const ProjectNeed: FC<any> = () => {
  const dispatch = useDispatch();
  const [checked] = useState(false);
  // const [item, setItem] = useState<any>();

  
  const { estimateList }: any = useSelector(estimateSelector);
  
  useEffect(() => {
    dispatch(fetchEstimate("en"));
  }, [dispatch]);
  
  const titles = estimateList.map((title:estimateListData)=>title.group)
  const title  = Array.from(new Set(titles))
  
  // const changeChecked = ( id:string| number | undefined) => {
  //   const checkedItem = estimateList.filter((item:estimateListData) => item.id === id, setChecked(!checked));
  // }

  return (
    <div className="projectNeed"> 
      {title.map((title: any, i) => {
        return(
              <div className="projectNeed__container" key={i}>
                    <div className="projectNeed__header">
                      <p className="projectNeed--title">{title}</p>
                    </div>
                    <div className="projectNeed__wrapper">
                      {estimateList.map((item:estimateListData) => {
                        const {id,image_url,name,group} = item
                        return (
                             <>
                                {group === title ? 
                                  <div  key={id} className={checked ? "projectNeed__checked" : "projectNeed__box"}>
                                      <input
                                        key={id}
                                        type="checkbox"
                                        className="projectNeed--checkmark"
                                        // onChange={() => changeChecked(id)}
                                      ></input>
                                      {image_url ? 
                                        <img className="projectNeed--icon" src={image_url} alt ="">
                                        </img>
                                        :
                                        null
                                      }
                                      <p className="projectNeed--description">
                                        {name}
                                      </p>
                                  </div>
                                  :
                                  null}
                             </>
                        );
                      })
                      }
                    </div>
                </div>
        )
      })}
    </div>
  );
};

export default ProjectNeed;
