'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/', {
    template: '<main></main>'
  }).when('/stopwatch', {
    template: '<stopwatch></stopwatch>'
  });
}
