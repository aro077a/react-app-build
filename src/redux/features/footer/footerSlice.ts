import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getFooterCompany, getFooterContact } from "../../../api/api";
import { AppThunk, RootState } from "../../store";

import { FooterState } from "./model";

const initialState: FooterState = {
  footerCompany: [],
  footerContact: [],
  loading: false,
  errors: "",
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setFooterFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setFooterCompany: (state, { payload }: PayloadAction<any>) => {
      state.footerCompany = payload;
    },
    setFooterContact: (state, { payload }: PayloadAction<any>) => {
      state.footerContact = payload;
    },
  },
});

export const fetchFooterCompany =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getFooterCompany(lang);
      dispatch(setLoading(false));
      dispatch(setFooterCompany(res.data));
    } catch (error) {
      dispatch(setFooterFailure(error.message));
      dispatch(setLoading(false));
    }
  };
export const fetchFooterContact =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getFooterContact(lang);
      dispatch(setLoading(false));
      dispatch(setFooterContact(res.data));
    } catch (error) {
      dispatch(setFooterFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const {
  setLoading,
  setFooterFailure,
  setFooterCompany,
  setFooterContact,
} = footerSlice.actions;

export default footerSlice.reducer;

export const footerSelector = (state: { footer: RootState }) =>
  state.footer.footer;
