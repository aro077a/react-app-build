import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getEstimate } from "../../../api/api";
import { AppThunk } from "../../store";

import { estimateState, estimateListData } from "./model";

const initialState: estimateState = {
    estimateList: [],
    loading: false,
    errors: "",
};

const estimateSlice = createSlice({
    name: "careers",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
          state.loading = payload;
        },
    
        getEstimateFailure: (state, { payload }: PayloadAction<string>) => {
          state.errors = payload;
        },
    
        getEstimateSuccess: (state, { payload }: PayloadAction<any>) => {
          state.estimateList = payload;
        },
      },
});

export const fetchEstimate = 
(lang: string): AppThunk =>
    async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const res = await getEstimate(lang);
            dispatch(setLoading(false));
            dispatch(getEstimateSuccess(res.data.estimateTypes));
          } catch (error) {
            dispatch(getEstimateFailure(error.message));
            dispatch(setLoading(false));
          }
    }; 

export const { setLoading, getEstimateFailure, getEstimateSuccess } = estimateSlice.actions;

export default estimateSlice.reducer;

export const estimateSelector = (state:  {estimateList: estimateListData}) => state.estimateList;