function Breakpoint(init) {
  Object.assign(this, init);
}

Breakpoint.prototype.valueOf = function() {
  return this.max;
};

Breakpoint.prototype.mq = function() {
  return (
    "@media (min-width: " +
    this.min +
    "px)" +
    (this.max ? " and (max-width: " + this.max + "px)" : "")
  );
};

module.exports = {
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
  })
};

module.exports.current;
