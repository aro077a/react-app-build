export interface OurServicesState {
  services: IServices;
  loading: boolean;
  errors: string;
}

export interface IServices {
  services?: allServicesType[] | null;
  ourService?: ourServiceType[] | null;
  serviceContent?: serviceContentType[] | null;
  subService?: serviceContentType[] | null;
  projectService?:serviceContentType[] | null;
  sliderService?:serviceContentType[] | null;
  sliderSubService?:serviceContentType[] | null;
  footerService?:serviceContentType[] | null;
  sliderData?:serviceContentType[] | null;
  sliderSubData?:serviceContentType[] | null;
}

export type allServicesType = {
  id: number | string;
  title: string;
  sub_title: string;
  description: string;
  image_url: string;
};
export type ourServiceType = {
  id: number | string;
  title: string;
  sub_title: string;
  description: string;
  image: string;
  image_url: string;
};

export type serviceContentType = {
  id: number | string;
  title: string;
  description: string;
  our_service_image: ourServiceImageType;
};

type ourServiceImageType = {
  id: number | string;
  id_our_services_content: string;
  title: string;
  image: string;
  image_url: string;
};
