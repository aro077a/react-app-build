import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getNavLinks } from "../../../api/api";
import { AppThunk } from "../../store";

import { NavbarState } from "./model";

const initialState: NavbarState = {
  navLinks: [],
  loading: false,
  errors: "",
};

const navbarSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getNavLinksFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    getNavLinksSuccess: (state, { payload }: PayloadAction<any>) => {
      state.navLinks = payload;
    },
  },
});

export const fetchNavLinks = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getNavLinks(lang);
      dispatch(setLoading(false));
      dispatch(getNavLinksSuccess(res.data.sections));
    } catch (error) {
      dispatch(getNavLinksFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const { setLoading, getNavLinksFailure, getNavLinksSuccess } =
  navbarSlice.actions;

export default navbarSlice.reducer;

export const navbarSelector = (state: { navLinks: NavbarState }) =>
  state.navLinks;
