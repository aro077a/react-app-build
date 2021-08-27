import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getNextStep,
  getHomeEstimate,
  getHomeWorks,
  getHomeServices,
} from "../../../api/api";
import { AppThunk } from "../../store";

import { HomeState, IHome } from "./models";

const initialState: HomeState = {
  homeData: {
    homeNextStep: null,
    homeEstimate: null,
    homeWorks: null,
    homeServices: null,
  },
  loading: false,
  error: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState: { ...initialState },
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getHomeFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },

    getHomeNextStepSuccess: (state, { payload }: PayloadAction<any>) => {
      state.homeData.homeNextStep = {
        ...state.homeData.homeNextStep,
        ...payload,
      };
    },

    getHomeEstimateSuccess: (state, { payload }: PayloadAction<any>) => {
      state.homeData.homeEstimate = {
        ...state.homeData.homeEstimate,
        ...payload,
      };
    },

    getHomeWorksSuccess: (state, { payload }: PayloadAction<any>) => {
      state.homeData.homeWorks = {
        ...state.homeData.homeWorks,
        ...payload,
      };
    },

    getHomeServicesSuccess: (state, { payload }: PayloadAction<any>) => {
      state.homeData.homeServices = {
        ...state.homeData.homeServices,
        ...payload,
      };
    },
  },
});

////fetching home-next data
export const fetchHomeNext = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getNextStep(lang);
      dispatch(setLoading(false));
      dispatch(getHomeNextStepSuccess(res.data.pageInf[0]));
    } catch (error) {
      dispatch(getHomeFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

//fetching home-estimate data
export const fetchHomeEstimate = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getHomeEstimate(lang);
      dispatch(setLoading(false));
      dispatch(getHomeEstimateSuccess(res.data.pageInf[0]));
    } catch (error) {
      dispatch(getHomeFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

//fetching home-works data
export const fetchHomeWorks = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getHomeWorks(lang);
      dispatch(setLoading(false));
      dispatch(getHomeWorksSuccess(res.data.pageInf[0]));
    } catch (error) {
      dispatch(getHomeFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

//fetching homeServices data
export const fetchHomeServices = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getHomeServices(lang);
      dispatch(setLoading(false));
      dispatch(getHomeServicesSuccess(res.data.pageInf[0]));
    } catch (error) {
      dispatch(getHomeFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const {
  setLoading,
  getHomeFailure,
  getHomeNextStepSuccess,
  getHomeEstimateSuccess,
  getHomeWorksSuccess,
  getHomeServicesSuccess,
} = homeSlice.actions;

export default homeSlice.reducer;

export const allHomeSelector = (state: { homeData: IHome }) => state.homeData;
