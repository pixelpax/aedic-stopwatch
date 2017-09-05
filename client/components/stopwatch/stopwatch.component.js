'use strict';
const angular = require('angular');

export class stopwatchComponent {
  //@ngInject
  startTimer() {
    this.timerRunning = true;
    if(this.timerFirstStart) {
      this.timeElapsed = 0;
      this.timerStartDate = new Date();
    }
  }
  pauseTimer() {
    this.timerRunning = false;
    this.timerFirstStart = false;
  }
  resetTimer() {
    this.timeElapsed = 0;
    this.timerRunning = true;
    this.timerFirstStart = false;
    this.timerStartDate = new Date();
  }


  constructor($interval) {
    'ngInject';
    this.timerFirstStart = true;
    this.timerRunning = false;
    this.timerStartDate = new Date();
    $interval(() => {
      if(this.timerRunning) {
        this.timeElapsed = Math.floor((new Date() - this.timerStartDate) / 1000);
      }
    }, 1000);
  }
}

export default angular.module('funAngularProjectApp.stopwatch', [])
  .component('stopwatch', {
    template: require('./stopwatch.html'),
    // bindings: { message: '<' },
    controller: stopwatchComponent
  })
  .name;
