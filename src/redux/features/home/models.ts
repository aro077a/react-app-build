export interface HomeState {
  homeData: IHome;
  loading: boolean;
  error: string;
}

export interface IHome {
  homeData?: allHomeDataType[] | null;
  homeNextStep?: homeContentType[] | null;
  homeEstimate?: homeContentType[] | null;
  homeWorks?: homeContentType[] | null;
  homeServices?: homeContentType[] | null;
}

export type allHomeDataType = {
  id: number | string;
  title: string;
  sub_title: string;
  description: string;
  image_url: string;
};

export type homeContentType = {
  id?: number | string;
  title?: string;
  description?: string;
  image_url?: string;
};
