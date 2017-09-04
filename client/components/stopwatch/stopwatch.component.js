'use strict';
const angular = require('angular');

export class stopwatchComponent {
  //@ngInject
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('funAngularProjectApp.stopwatch', [])
  .component('stopwatch', {
    template: require('./stopwatch.html'),
    bindings: { message: '<' },
    controller: stopwatchComponent
  })
  .name;
