export interface careersState {
  careers: careers;
  loading: boolean;
  errors: string;
}

interface careers {
  careerLists: careerListsDataType[] | null;
}

export type careerListsDataType = {
  id: number | string;
  title: string;
  sub_title: string;
  description: string;
  image: string;
  order: number | string;
  image_url: string;
};
