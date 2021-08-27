import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCareerLists } from "../../../api/api";
import { AppThunk } from "../../store";

import { careerListsDataType, careersState } from "./model";

const initialState: careersState = {
  careers: {
    careerLists: null,
  },
  loading: false,
  errors: "",
};

const careersSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getCareersFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    getCareersSuccess: (state, { payload }: PayloadAction<any>) => {
      state.careers = payload;
    },
  },
});

export const fetchCareers =
  (lang: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getCareerLists(lang);
      dispatch(setLoading(false));
      dispatch(getCareersSuccess(res.data));
    } catch (error) {
      dispatch(getCareersFailure(error.message));
      dispatch(setLoading(false));
    }
  };

export const { setLoading, getCareersFailure, getCareersSuccess } =
  careersSlice.actions;

export default careersSlice.reducer;

export const careersSelector = (state: {
  careers: { careerLists: careerListsDataType };
}) => state.careers;
