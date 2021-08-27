import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getFaqs } from "../../../api/api";
import { AppThunk } from "../../store";

import { FaqState, faqsType } from "./model";

const initialState: FaqState = {
  faqs: [],
  loading: false,
  errors: "",
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getFaqFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    getFaqSuccess: (state, { payload }: PayloadAction<any>) => {
      state.faqs = payload;
    },
  },
});

export const fetchFaq = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getFaqs(lang);
      dispatch(setLoading(false));
      dispatch(getFaqSuccess(res.data));
    } catch (error) {
      dispatch(getFaqSuccess(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const { setLoading, getFaqFailure, getFaqSuccess } = faqSlice.actions;

export default faqSlice.reducer;

export const faqSelector = (state: { faq: faqsType }) => state.faq;
