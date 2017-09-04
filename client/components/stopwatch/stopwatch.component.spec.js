'use strict';

describe('Component: stopwatch', function() {
  // load the component's module
  beforeEach(module('funAngularProjectApp.stopwatch'));

  var stopwatchComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    stopwatchComponent = $componentController('stopwatch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
