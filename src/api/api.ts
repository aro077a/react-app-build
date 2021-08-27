import axios from "axios";

import { config } from "../utils/config";
import {
  BASE_URL,
  SECTIONS,
  CAREERS_LIST,
  OUR_SERVICES,
  SERVICES_PROJECT,
  SERVICES_ABOUT_US,
  SERVICES_SUB_ABOUT_US,
  SERVICES_BY_ID,
  SERVICES_FOOTER_BY_ID,
  PRIVACY_POLICY,
  FAQ,
  ESTIMATE,
  FOOTERCOMPANY,
  FOOTERCONTACT,
  HOME_NEXT_STEP,
  HOME_ESTIMATE,
  HOME_WORKS,
  HOME_SERVICES,
} from "../utils/constants";

const api: any = axios.create({
  baseURL: BASE_URL,
});

// Fetch navLinks

export const getNavLinks = async (lang: string) => {
  return await api.get(`${SECTIONS}`, config(lang));
};

// Fetch careerList

export const getCareerLists = async (lang: string) => {
  return await api.get(`${CAREERS_LIST}`, config(lang));
};

// Fetch ourServices

export const getOurServices = async (lang: string) => {
  return await api.get(`${OUR_SERVICES}`, config(lang));
};

// Fetch servicesProject

export const getServicesProject = async (lang: string) => {
  return await api.get(`${SERVICES_PROJECT}`, config(lang));
};

// Fetch services about_us

export const getServicesAboutUs = async (lang: string) => {
  return await api.get(`${SERVICES_ABOUT_US}`, config(lang));
};

// Fetch services sub_about_us

export const getServicesAboutSubUs = async (lang: string) => {
  return await api.get(`${SERVICES_SUB_ABOUT_US}`, config(lang));
};

//Fetch services by id

export const getServicesById = async (lang: string, id: number) => {
  return await api.get(`${SERVICES_BY_ID}${id}`, config(lang));
};

//Fetches services footer by id

export const getServicesFooterById = async (lang: string) => {
  return await api.get(`${SERVICES_FOOTER_BY_ID}`, config(lang));
};

//Fetches privacy policy

export const getPagePrivacyPolicy = async (lang: string) => {
  return await api.get(`${PRIVACY_POLICY}`, config(lang));
};

//Fetches faq

export const getFaqs = async (lang: string) => {
  return await api.get(`${FAQ}`, config(lang));
};

//fetches estimate

export const getEstimate = async (lang: string) => {
  return await api.get(`${ESTIMATE}`, config(lang));
};

//Fetch footer Company

export const getFooterCompany = async (lang: string) => {
  return await api.get(`${FOOTERCOMPANY}`, config(lang));
};

//Fetch footer Contact

export const getFooterContact = async (lang: string) => {
  return await api.get(`${FOOTERCONTACT}`, config(lang));
};

//Fetch home_next_step data

export const getNextStep = async (lang: string) => {
  return await api.get(`${HOME_NEXT_STEP}`, config(lang));
};

//Fetch home_estimate data

export const getHomeEstimate = async (lang: string) => {
  return await api.get(`${HOME_ESTIMATE}`, config(lang));
};

//Fetch home_next_step data

export const getHomeWorks = async (lang: string) => {
  return await api.get(`${HOME_WORKS}`, config(lang));
};

//fetch home services data

export const getHomeServices = async (lang: string) => {
  return await api.get(`${HOME_SERVICES}`, config(lang));
};

export default api;
