var mdMedia = require("./index.js");

test("Returns media query", function() {
  expect(mdMedia.medium.mq()).toEqual(
    "@media (min-width: 960px) and (max-width: 1279px)"
  );
  expect(mdMedia.xlarge.mq()).toEqual("@media (min-width: 1920px)");
});

test("Size comparison via operators", function() {
  expect(mdMedia.medium < mdMedia.large1).toBe(true);
  expect(mdMedia.medium > mdMedia.large1).toBe(false);
  expect(mdMedia.large1 < mdMedia.medium).toBe(false);
  expect(mdMedia.large1 > mdMedia.medium).toBe(true);
});

test("Current width is returned", function() {
  window.innerWidth = 1024;
  expect(mdMedia.current()).toEqual("medium");
});

test("Sidenav mq is returned", function() {
  expect(mdMedia.noSidenav.mq()).toEqual("@media (max-width: 599px)");
  expect(mdMedia.sidenav.mq()).toEqual("@media (min-width: 600px)");
});

test("isTrue is evaluated", function() {
  window.innerWidth = 1024;
  expect(mdMedia.medium.isTrue()).toBe(true);
  expect(mdMedia.small1.isTrue()).toBe(false);
})