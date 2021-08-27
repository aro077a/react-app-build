import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import careersReducer from './features/careers/careersSlice';
import estimateReducer from './features/estimate/estimateSlice';
import faqReducer from './features/faq/faqSlider';
import footerReducer from './features/footer/footerSlice';
import homeReducer from './features/home/homeSlice';
import language from './features/language';
import navbarReducer from './features/navbar/navbarSlice';
import serviceReducer from './features/our-services/ourServicesSlice';
import privacyReducer from './features/privacy-policy/privacy';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    navLinks: navbarReducer,
    services: serviceReducer,
    faq: faqReducer,
    footer: footerReducer,
    careers: careersReducer,
    estimateList: estimateReducer,
    privacy: privacyReducer,
    homeData: homeReducer,
    currentLanguage: language,
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
