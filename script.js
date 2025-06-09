"use strict";

// set initial #screen resolution on load
createPixels(16, 16);

/**
 * Creates xRes * yRes div elements with the class="pixel" and appends them to
 * the #screen element. Sets flex-basis for each .pixel to fit in parent.
 * @param {int} xRes The horizontal resolution for the .pixels.
 * @param {int} yRes The vertical resolution for the .pixels.
 */
function createPixels(xRes, yRes) {
  const easScreen = document.querySelector("#screen");
  const resolution = xRes * yRes;
  const basis = easScreen.offsetWidth / xRes;
  clearPixels();
  for (let i = 0; i < resolution; i++) {
    const pixel = document.createElement("div");
    const att = document.createAttribute("class");
    att.value = "pixel";
    pixel.setAttributeNode(att);
    pixel.style.flexBasis = `${basis}px`;
    easScreen.appendChild(pixel);
  }
  addPixelEventListener();
}

/**
 * Clears all the child elements from #screen
 */
function clearPixels() {
  const easScreen = document.querySelector("#screen");
  while (easScreen.firstChild) {
    easScreen.removeChild(easScreen.lastChild);
  }
}

/**
 * Adds mouseover an event listener that calls activatePixel to each .pixel
 * element
 */
function addPixelEventListener() {
  const pixels = document.getElementsByClassName("pixel");
  for (let pixel of pixels) {
    pixel.addEventListener("mouseover", (event) => {
      activatePixel(event);
    });
  }
}

/**
 * Adds the class active to the event's target element
 * @param {MouseEvent<"mouseover">} event
 */
function activatePixel(event) {
  const att = document.createAttribute("class");
  att.value = "pixel active";
  event.target.setAttributeNode(att);
}

// event listener for the resolution submit button
const resolutionSubmit = document.querySelector("#res-submit-btn");
resolutionSubmit.addEventListener("click", () => {
  setResolution();
});

/**
 * Checks the value of #resolution number input. Prompts if out of range
 * otherwise clears #screen and re-populates the area with new .pixel elements
 */
function setResolution() {
  const res = document.querySelector("#res-input").value;
  if (res < 1) prompt("Resolution input value too low.");
  else if (res > 100) prompt("Resolution input value too high.");
  else {
    createPixels(res, res);
  }
}

// todo: reset button
// todo: rainbow mode
// todo: fade out
