import { ReactNode } from 'react';

import { navLinksType } from '../redux/features/navbar/model';
import { IServices } from '../redux/features/our-services/model';

export interface HomeContainerTabProps {
  technologies: technologiesType[];
}

export type technologiesType = {
  id?: number | string;
  title?: string;
  desc: descType[];
};

export type descType = {
  id: string | number;
  imgSrc: ReactNode;
  info: string;
};

export interface ServicesProps {
  services: servicesType[];
}

export type servicesType = {
  id?: string;
  title: string;
  desc: string;
};

export type testimonialsType = {
  id?: number | string;
  info: string;
  name?: string | number | null;
  profession?: string | number | null;
  className?: string;
};

export type worksType = {
  id?: string;
  title: string;
  info: string;
  img: string;
};

export interface SelectType {
  value: string;
  label: any | ReactNode;
}

export interface ApproachType {
  title: string;
  content: Array<string>;
}

export interface AboutWorksDataType {
  img: ReactNode;
  result: number;
  text: string;
}

export interface CareerPositionType {
  profession?: string;
  location: string;
  id: string;
}

export interface CareerOfferType {
  icon: ReactNode;
  title: string;
  desc: string;
  id: string;
}

export interface CareerValueType {
  icon: ReactNode;
  title: string;
  desc: string;
  id: string;
}

export interface ICareerMorePositionType {
  title: string;
  desc: Array<string>;
  id: string;
}

export interface ServiceTitleProps {
  title?: string;
  className?: string;
  titleClassName?: string;
}
export interface ServicesListItemProps {
  servicesData: IServices;
}

export interface MobileNavbarProps {
  showMenu?: () => void;
  selectedLang?: any;
  setLabelName?: (arg: string) => void;
  navLinks?: navLinksType[];
}
export interface NavbarProps {
  showMenu?: () => void;
  setLabelName?: (arg: string) => void;
  scrollTop?: number;
  navLinks?: navLinksType[];
  headerClass?: string;
}

export interface DescriptionService {
  title: string;
  description: string;
}
export interface ImageService {
  image: string;
  description: String;
}

export interface SliderServiceType {
  sliderData?: [] | null;
}
