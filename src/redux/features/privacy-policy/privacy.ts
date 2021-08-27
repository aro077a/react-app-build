import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getPagePrivacyPolicy } from "../../../api/api";

import { AppThunk } from "./../../store";
import { PrivacyState } from "./models";

const initialState: PrivacyState = {
  privacy: [],
  loading: false,
  errors: "",
};

const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    getPagePrivacyPolicyFailure: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.errors = payload;
    },
    getPrivacySuccess: (state, { payload }: PayloadAction<any>) => {
      state.privacy = payload;
    },
  },
});

export const fetchPrivacy = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getPagePrivacyPolicy(lang);
      dispatch(setLoading(false));
      dispatch(getPrivacySuccess(res.data.pageInf[0]));
    } catch (error) {
      dispatch(getPagePrivacyPolicyFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const { setLoading, getPagePrivacyPolicyFailure, getPrivacySuccess } =
  privacySlice.actions;

export default privacySlice.reducer;
