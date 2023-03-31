import React from "react";

import ImportsDetailsPage from "./pages/ImportsDetailsPage/ImportsDetailsPage";
import ImportsMoreDetailsPage from "./pages/ImportsMoreDetailsPage/ImportsMoreDetailsPage";
import ImportsPage from "./pages/ImportsPage/ImportsPage";
import AboutImportsPage from "./pages/AboutImportsPage/AboutImportsPage";

const routes = [
    {
    name: 'Imports',
    path: '/imports',
    element: <ImportsPage/>,
    exact: true,
  },
  {
    name: 'Imports Details',
    path: '/imports/details',
    element: <ImportsDetailsPage/>,
    exact: true,
  },
  {
    name: 'More Details',
    path: '/imports/details/more-details',
    element: <ImportsMoreDetailsPage/>,
    exact: true,
  },
  {
    name: 'About Imports',
    path: 'imports/about',
    element: <AboutImportsPage/>,
    exact: true,
  },
];

export default routes;