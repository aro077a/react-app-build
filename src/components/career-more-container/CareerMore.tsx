import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useAppSelector } from "../../redux/hooks";

import {
  fetchCareers,
  careersSelector,
} from "./../../redux/features/careers/careersSlice";
import ApplyPosition from "./ApplyPosition";
import CareerMorePosition from "./CareerMorePosition";

const CareerMoreContainer = () => {
  const { language } = useAppSelector((state) => state.currentLanguage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCareers(language));
  }, [dispatch, language]);

  const { careers }: any = useSelector(careersSelector);
  const { carrerLists = [] } = (careers && careers) || {};

  return (
    <div className="careerMore__wrapper">
      <div className="careerMore__wrapper__container">
        <CareerMorePosition careerData={carrerLists} />
        <ApplyPosition />
      </div>
    </div>
  );
};

export default CareerMoreContainer;
