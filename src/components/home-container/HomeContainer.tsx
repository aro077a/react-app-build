import { useRef, useState, useEffect } from "react";

import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

import bgImage from "../../assets/images/bg_image.jpg";
import {
  fetchHomeNext,
  fetchHomeEstimate,
  fetchHomeWorks,
  allHomeSelector,
} from "../../redux/features/home/homeSlice";
import { useAppSelector } from "../../redux/hooks";
import CloseIcon from "../icon-containers/CloseIcon";
import LeftArrowIcon from "../icon-containers/LeftArrowIcon";
import PlayIcon from "../icon-containers/PlayIcon";
import RightArrowIcon from "../icon-containers/RightArrowIcon";
import { technologiesType } from "../model";
import ContentDescription from "../reusable-components/ContentDescription";
import ImageContainer from "../reusable-components/ImageContainer";
import Popup from "../reusable-components/Popup";
import SliderContainer from "../reusable-components/Slider";
import Title from "../reusable-components/Title";
import VideoContainer from "../reusable-components/VideoContainer";

import ContactUs from "./ContactUs";
import { technologies } from "./fakeData";
import { HomeContainerTab } from "./HomeContainerTab";
import OurServices from "./OurServices";
import OurWorks from "./OurWorks";
import Testimonials from "./Testimonials";

const HomeContainer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [played, setPlayed] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [seeking, setSeeking] = useState(false);

  const { language } = useAppSelector((state) => state.currentLanguage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeNext(language));
    dispatch(fetchHomeEstimate(language));
    dispatch(fetchHomeWorks(language));
  }, [dispatch, language]);

  const { homeData }: any = useSelector(allHomeSelector);
  const { homeEstimate, homeNextStep, homeWorks } = homeData || {};

  //destructuring next part
  const { title: nextTitle = "", description: nextDescription = "" } =
    homeNextStep || [];

  const videoRef = useRef<any>();

  const openVideoPopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsPlaying(!isPlaying);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.props.onPlay();
    } else {
      videoRef.current.props.onPause();
    }
  };

  const url =
    "https://strvothers.s3.amazonaws.com/web-videos/website-home-background-1080p.mp4";

  useEffect(() => {
    if (isPopupOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  });
  return (
    <div className="homeContainer__wrapper">
      <div className="homeContainer__wrapper__videoAndImage">
        <VideoContainer autoPlay muted loop />
        <ImageContainer img={bgImage} />
        {/* <ImageContainer /> */}
      </div>
      <div className="homeContainer__wrapper__desc">
        <ContentDescription
          firstLine={nextTitle}
          info={nextDescription}
          buttonText="Get in touch"
        />

        <Fade bottom delay={100} duration={1100}>
          <div
            className="homeContainer__wrapper__desc__play"
            role="button"
            aria-hidden="true"
            tabIndex={0}
            onClick={openVideoPopup}
          >
            <PlayIcon />
          </div>
        </Fade>
      </div>
      <Fade bottom cascade delay={100} duration={1100}>
        <div className="homeContainer__wrapper__video__info">
          <p className="homeContainer__wrapper__video__info--text">
            we&quot;ve built solutions for...
          </p>
        </div>
      </Fade>
      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        className="homeContainer__wrapper__popup"
      >
        <CloseIcon
          onClick={closePopup}
          className="homeContainer__wrapper__popup--close"
        />
        <PlayIcon
          className={
            !isPlaying
              ? "homeContainer__wrapper__popup--videoPlay"
              : "homeContainer__wrapper__popup--videoPause"
          }
          onClick={handleVideoPlay}
        />
        <div className="homeContainer__wrapper__popup__videoPopupWrapper">
          <ReactPlayer
            ref={videoRef}
            className="homeContainer__wrapper__popup__videoPopupWrapper__videoPopup"
            url={url}
            controls={false}
            autoPlay
            playing={isPlaying}
            onClick={handleVideoPlay}
            onProgress={(newState) => {
              if (!seeking) {
                setPlayed(newState.played);
              }
            }}
          />
          <div className="homeContainer__wrapper__popup__videoPopupWrapper__rangeWrapper">
            <input
              type="range"
              className="homeContainer__wrapper__popup__videoPopupWrapper__rangeWrapper--range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onTouchStart={() => {
                setSeeking(true);
              }}
              onMouseDown={() => {
                setSeeking(true);
              }}
              onChange={({ target: { value } }) => {
                setPlayed(parseFloat(value));
                videoRef?.current?.seekTo(parseFloat(value));
              }}
              onTouchEnd={({ target: { value } }: any) => {
                setSeeking(false);
                videoRef?.current?.seekTo(parseFloat(value));
              }}
              onMouseLeave={({ target: { value } }: any) => {
                setSeeking(false);
              }}
            />
          </div>
        </div>
      </Popup>
      <SliderContainer
        settings={{
          slidesPerRow: 1,
          dots: true,
          className: "center",
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          prevArrow: <LeftArrowIcon />,
          nextArrow: <RightArrowIcon />,
        }}
      >
        {technologies.map((desc: technologiesType) => {
          return (
            <div className="homeContainer__wrapper__slide" key={desc.id}>
              <Title
                title={desc.title}
                className="homeContainer__wrapper__slide--title"
              />
              <HomeContainerTab desc={[...desc.desc]} />
            </div>
          );
        })}
      </SliderContainer>
      <OurServices homeEstimate={homeEstimate} />
      <Testimonials />
      <OurWorks homeWorks={homeWorks} />
      <ContactUs />
    </div>
  );
};
export default HomeContainer;
