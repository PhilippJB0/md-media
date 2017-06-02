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
 * Usage: media.xl.mq() // returns @media (min-width: 1920px)
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
 * Returns a breakpoint which contains all breakpoints greater or equal of this one
 * Usage: media.md.gte().mq() // returns "@media (min-width: 960px)"
 * 
 * @returns {Boolean}
 */
Breakpoint.prototype.gte = function() {
  return new Breakpoint({ min: this.min });
};

/**
 * Returns a breakpoint which contains all breakpoints smaller or equal of this one
 * Usage: media.md.lte().mq() // returns "@media (max-width: 1279px)"
 * 
 * @returns {Boolean}
 */
Breakpoint.prototype.lte = function() {
  return new Breakpoint({ max: this.max });
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
  xs: new Breakpoint({
    min: 0,
    max: 599
  }),
  sm: new Breakpoint({
    min: 600,
    max: 959
  }),
  md: new Breakpoint({
    min: 960,
    max: 1279
  }),
  lg: new Breakpoint({
    min: 1280,
    max: 1920
  }),
  xl: new Breakpoint({
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
