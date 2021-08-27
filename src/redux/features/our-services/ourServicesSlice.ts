import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getServicesProject,
  getOurServices,
  getServicesAboutUs,
  getServicesAboutSubUs,
  getServicesById,
  getServicesFooterById,
} from "../../../api/api";
import { AppThunk } from "../../store";

import { OurServicesState, IServices } from "./model";

const initialState: OurServicesState = {
  services: {
    services: null,
    ourService: null,
    serviceContent: null,
    subService: null,
    projectService: null,
    sliderService: null,
    sliderSubService: null,
    footerService: null,
  },
  loading: false,
  errors: "",
};

const ourServicesSlice = createSlice({
  name: "services",
  initialState: { ...initialState },
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getServicesFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    getServicesSuccess: (state, { payload }: PayloadAction<any>) => {
      state.services = {
        ...state.services,
        ...payload,
      };
    },
    getProjectServices: (state, { payload }: PayloadAction<any>) => {
      state.services.projectService = {
        ...state.services.projectService,
        ...payload,
      };
    },
    getSliderServices: (state, { payload }: PayloadAction<any>) => {
      state.services.sliderService = {
        ...state.services.sliderService,
        ...payload,
      };
    },
    getSliderSubServices: (state, { payload }: PayloadAction<any>) => {
      state.services.sliderSubService = {
        ...state.services.sliderSubService,
        ...payload,
      };
    },
    getFooterServices: (state, { payload }: PayloadAction<any>) => {
      state.services.footerService = {
        ...state.services.footerService,
        ...payload,
      };
    },
  },
});

export const fetchServices =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getOurServices(lang);
      dispatch(setLoading(false));
      dispatch(getServicesSuccess(res.data));
    } catch (error) {
      dispatch(getServicesFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const fetchServicesById =
  (lang: string, id: number): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getServicesById(lang, id);
      dispatch(setLoading(false));
      dispatch(getServicesSuccess(res.data));
    } catch (error) {
      dispatch(getServicesFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const fetchSliderServices =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getServicesAboutUs(lang);
      dispatch(setLoading(false));
      dispatch(getSliderServices(res.data));
    } catch (error) {
      dispatch(getServicesFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const fetchSliderSubServices =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getServicesAboutSubUs(lang);
      dispatch(setLoading(false));
      dispatch(getSliderSubServices(res.data));
    } catch (error) {
      dispatch(getServicesFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const fetchProjectServices =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getServicesProject(lang);
      dispatch(setLoading(false));
      dispatch(getProjectServices(res.data));
    } catch (error) {
      dispatch(getServicesFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const fetchServicesFooter =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getServicesFooterById(lang);

      dispatch(setLoading(false));
      dispatch(getFooterServices(res.data));
    } catch (error) {
      dispatch(getServicesFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const {
  setLoading,
  getServicesFailure,
  getServicesSuccess,
  getProjectServices,
  getSliderServices,
  getSliderSubServices,
  getFooterServices,
} = ourServicesSlice.actions;

export default ourServicesSlice.reducer;

export const allServicesSelector = (state: { services: IServices }) =>
  state.services;
