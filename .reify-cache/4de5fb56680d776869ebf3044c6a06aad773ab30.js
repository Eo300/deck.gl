"use strict";module.export({getBoundingBoxInPage:()=>getBoundingBoxInPage});/* global window */
// Get the bounding box of a DOMElement relative to the page
function getBoundingBoxInPage(domElement) {
  const bbox = domElement.getBoundingClientRect();
  return {
    x: window.scrollX + bbox.x,
    y: window.scrollY + bbox.y,
    width: bbox.width,
    height: bbox.height
  };
}