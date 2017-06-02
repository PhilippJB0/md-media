var mdMedia = require("./index.js");

test("Returns media query", function() {
  expect(mdMedia.md.mq()).toEqual(
    "@media (min-width: 960px) and (max-width: 1279px)"
  );
  expect(mdMedia.xl.mq()).toEqual("@media (min-width: 1920px)");
});

test("Size comparison via operators", function() {
  expect(mdMedia.md < mdMedia.lg).toBe(true);
  expect(mdMedia.md > mdMedia.lg).toBe(false);
  expect(mdMedia.lg < mdMedia.md).toBe(false);
  expect(mdMedia.lg > mdMedia.md).toBe(true);
});

test("Current width is returned", function() {
  window.innerWidth = 1024;
  expect(mdMedia.current()).toEqual("md");
});

test("Sidenav mq is returned", function() {
  expect(mdMedia.noSidenav.mq()).toEqual("@media (max-width: 599px)");
  expect(mdMedia.sidenav.mq()).toEqual("@media (min-width: 600px)");
});

test("isTrue is evaluated", function() {
  window.innerWidth = 1024;
  expect(mdMedia.md.isTrue()).toBe(true);
  expect(mdMedia.sm.isTrue()).toBe(false);
})

test("gte and let work", function() {
  expect(mdMedia.md.gte().mq()).toEqual("@media (min-width: 960px)");
  expect(mdMedia.md.lte().mq()).toEqual("@media (max-width: 1279px)");
})