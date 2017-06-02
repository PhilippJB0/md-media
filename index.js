function Breakpoint(init) {
  Object.assign(this, init);
}

/**
 * Returns the maximum window width for this breakpoint
 */
Breakpoint.prototype.valueOf = function() {
  return this.max;
};

/**
 * Returns the media query for this breakpoint to be used in css
 * Usage: media.xlarge.mq() // returns @media (min-width: 1920px)
 * 
 * @returns {String}
 */
Breakpoint.prototype.mq = function() {
  return (
    "@media " +
    (this.min ? "(min-width: " + this.min + "px)" : "") +
    (this.min && this.max ? " and " : "") +
    (this.max ? "(max-width: " + this.max + "px)" : "")
  );
};

/**
 * Returns true iff the breakpoint is currently active
 * Usage: media.xlarge.isTrue() // returns true if window width > 1920px
 * 
 * @returns {Boolean}
 */
Breakpoint.prototype.isTrue = function() {
  var width = window.innerWidth;
  return (!this.min || this.min <= width) && (!this.max || this.max > width);
};

var breakpoints = {
  xsmall1: new Breakpoint({
    min: 0,
    max: 479
  }),
  xsmall2: new Breakpoint({
    min: 480,
    max: 599
  }),
  small1: new Breakpoint({
    min: 600,
    max: 839
  }),
  small2: new Breakpoint({
    min: 840,
    max: 959
  }),
  medium: new Breakpoint({
    min: 960,
    max: 1279
  }),
  large1: new Breakpoint({
    min: 1280,
    max: 1439
  }),
  large2: new Breakpoint({
    min: 1440,
    max: 1599
  }),
  large3: new Breakpoint({
    min: 1600,
    max: 1919
  }),
  xlarge: new Breakpoint({
    min: 1920
  }),
  sidenav: new Breakpoint({
    min: 600
  }),
  noSidenav: new Breakpoint({
    max: 599
  })
};

function findCurrent() {
  var width = window.innerWidth;
  var size;
  for (size in breakpoints) {
    if (!breakpoints.hasOwnProperty(size)) continue;
    if (breakpoints[size].min < width && width <= breakpoints[size].max)
      return size;
  }
  return null;
}

module.exports = breakpoints;
module.exports.current = findCurrent;
