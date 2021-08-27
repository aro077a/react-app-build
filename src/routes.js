import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
// const CareerMore = lazy(() => import("./pages/CareerMore"));
const CareerMorePosition = lazy(() =>
  import("components/career-more-container/CareerMorePosition")
);
const Contact = lazy(() => import("./pages/Contact"));
const Faq = lazy(() => import("./pages/Faq"));
const Services = lazy(() => import("./pages/Services"));
const DevelopmentContainer = lazy(() =>
  import("components/services-container/DevelopmentContainer")
);
const Works = lazy(() => import("./pages/Works"));
const GetAnEstimate = lazy(() => import("./pages/GetAnEstimate"));
const Privacy = lazy(() => import("./pages/Privacy"));

const routes = [
  {
    enabled: true,
    path: "/about",
    component: About,
    title: "About page",
    child: null,
  },
  {
    enabled: true,
    path: "/career",
    component: Career,
    title: "Career page",
    child: null,
  },
  {
    enabled: true,
    path: "/career/:id",
    component: CareerMorePosition,
    title: "Career page",
    child: null,
  },
  {
    enabled: true,
    path: "/contact",
    component: Contact,
    title: "Contact page",
    child: null,
  },
  {
    enabled: true,
    path: "/faq",
    component: Faq,
    title: "Faq page",
    child: null,
  },

  {
    enabled: true,
    path: "/services",
    component: Services,
    title: "Services page",
    child: null,
  },
  {
    enabled: true,
    path: "/services/:id",
    component: DevelopmentContainer,
    title: "Development page",
    child: null,
  },
  {
    enabled: true,
    path: "/works",
    component: Works,
    title: "Works page",
    child: null,
  },
  {
    enabled: true,
    path: "/estimate",
    component: GetAnEstimate,
    title: "Estimate page",
  },
  {
    path: "/privacy",
    component: Privacy,
    title: "Privacy policy",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
