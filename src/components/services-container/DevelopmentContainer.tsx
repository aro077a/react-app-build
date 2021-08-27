import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import {
  allServicesSelector,
  fetchServicesById,
  fetchProjectServices,
  fetchSliderServices,
  fetchSliderSubServices,
  fetchServicesFooter,
} from "../../redux/features/our-services/ourServicesSlice";
import { useAppSelector } from "../../redux/hooks";

import DescriptionComponent from "./DescriptionComponent";
import GetProjectComponent from "./GetProjectComponent";
import ImageComponent from "./ImageComponent";
import SliderService from "./SliderService";

interface ServiceData {
  selectedData: Description;
}
type Description = {
  title: string;
  text: string;
};

const DevelopmentContainer: FC<ServiceData> = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const { language } = useAppSelector((state) => state.currentLanguage);
  const { services }: any = useSelector(allServicesSelector);

  useEffect(() => {
    dispatch(fetchServicesById(language, Number(id)));
    dispatch(fetchProjectServices(language));
    dispatch(fetchSliderServices(language));
    dispatch(fetchSliderSubServices(language));
    dispatch(fetchServicesFooter(language));
  }, [dispatch, language, id]);

  //destructuring all services
  const {
    services: mainServices = [],
    ourService,
    serviceContent,
    subService = [],
    projectService = [],
    sliderService = [],
    sliderSubService = [],
    // footerService = [],
  } = services;

  //destructuring all ourServices
  const {
    title = "",
    image_url = "",
    description = "",
  } = (ourService && ourService[0]) || {};

  //destructuring all serviceContent
  const {
    title: techTitle,
    description: techDescription,
    our_service_image,
  } = (serviceContent && serviceContent[0]) || {};

  //destructuring all projectServices
  const { pageInf: projectInf = [] } = (projectService && projectService) || {};
  const { title: projectTitle, description: projectDescription } =
    (projectInf && projectInf[0]) || [];

  //destructuring  sliderService
  const { pageInf: sliderInf = [] } = (sliderService && sliderService) || {};

  //destructuring  sliderSubService
  const { pageInf: subSliderInf = [] } =
    (sliderSubService && sliderSubService) || {};

  //destructuring footerService
  // const { pageInf: footerInf = []} = (footerService && footerService) || {};

  return (
    <>
      <div className="development__container">
        <div className="development__container__description__top">
          <DescriptionComponent title={title} description={description} />
          <div className="development__container__description__top--first-image">
            <ImageComponent image={image_url} description={""} />
          </div>
        </div>
        <div className="development__container__description__tech">
          <DescriptionComponent
            title={techTitle}
            description={techDescription}
          />
          <div className="development__container__description__tech__small-images">
            {our_service_image &&
              our_service_image.map((item: any) => (
                <div
                  key={item.id}
                  className="development__container__description__tech__small-images--item"
                >
                  <ImageComponent
                    image={item.image_url}
                    description={item.title}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="development__container__description__footer">
          <div className="development__container__description__footer--item">
            {subService?.map((filteredItem: any) => (
              <DescriptionComponent
                key={filteredItem.id}
                title={filteredItem.title}
                description={filteredItem.description}
              />
            ))}
          </div>
        </div>
        <div>
          <GetProjectComponent
            title={projectTitle}
            description={projectDescription}
          />
        </div>
        <div className="development__container__slider">
          <SliderService sliderData={sliderInf} sliderSubData={subSliderInf} />
        </div>
        <div className="development__container__image-footer">
          {mainServices
            ?.filter((item: any) => item.id !== Number(id))
            .map((filteredItem: any) => (
              <div
                key={filteredItem.id}
                className="development__container__image-footer--item"
              >
                <ImageComponent
                  image={filteredItem.image_url}
                  description={filteredItem.title}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DevelopmentContainer;
