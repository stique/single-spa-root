/* eslint-disable func-names */
import * as singleSpa from 'single-spa';
import 'zone.js';

function showAlways() {
  return function () {
    return true;
  };
}

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

// function showWhenPrefix(routes) {
//   return function (location) {
//     return routes.some((route) => location.pathname.startsWith(route));
//   };
// }

// function showExcept(routes) {
//   return function (location) {
//     return routes.every((route) => location.pathname !== route);
//   };
// }

singleSpa.registerApplication(
  'header',
  () => import('single-spa-header-app'),
  showAlways(),
);

singleSpa.registerApplication(
  'filters',
  () => import('single-spa-filters-app'),
  showAlways(),
);

singleSpa.registerApplication(
  'services',
  () => import('single-spa-services-app'),
  showWhenAnyOf(['/']),
);

singleSpa.start();
