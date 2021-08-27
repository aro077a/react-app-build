import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  language: 'en',
  loading: false,
  errors: '',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    getLanguageSuccess: (state, { payload }: PayloadAction<any>) => {
      state.language = payload;
    },
  },
});

// export const fetchCurrentLanguage = (state = initialState, action: any) => {
//   //   return {

//   if (action) {
//     return {
//       ...state,
//       action,
//     };
//   }

// dispatch(setLoading(true));
// try {
//   dispatch(setLoading(false));
// dispatch(getLanguageSuccess(lang));
// console.log(lang, 'QQQQQQQQQQQQQQQQQQQQQQ');
// } catch (error) {
//   dispatch(getFailure(error.message));
//   dispatch(setLoading(false));
// }
//   };
// };

export const { setLoading, getFailure, getLanguageSuccess } =
  languageSlice.actions;

export default languageSlice.reducer;

export const languageSelector = (state: { language: any }) => state.language;
