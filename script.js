"use strict";

// global variable for pixel color
let pixelRGB = "rgb(32, 28, 35)";

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
    setElementClass(pixel, "pixel");
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
 * Applies a class name to an element
 * @param {HTMLelement} el The element to operate on.
 * @param {string} className The class name to give the element.
 */
function setElementClass(el, className) {
  const att = document.createAttribute("class");
  att.value = className;
  el.setAttributeNode(att);
}

/**
 * Adds mouseover event listener to each .pixel element. On event calls
 * setBackgroundColor on event.target.
 */
function addPixelEventListener() {
  const pixels = document.getElementsByClassName("pixel");
  for (let pixel of pixels) {
    pixel.addEventListener("mouseover", (event) => {
      setBackgroundColor(event.target, pixelRGB);
    });
  }
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

// event listener for the reset button
const resetBtn = document.querySelector("#clear-btn");
resetBtn.addEventListener("click", () => {
  resetPixelColor();
});

/**
 * resets background color of .pixel element
 */
function resetPixelColor() {
  const pixels = Array.from(document.getElementsByClassName("pixel"));
  pixels.forEach((pixel) => {
    setBackgroundColor(pixel, "#cacbcd");
  });
}

// event listener for the rainbow section
document.querySelector("#rainbow").addEventListener("click", () => {
  let selected = document.querySelector(
    "input[name='rainbow-radio']:checked"
  ).id;
  if (selected == "normal") {
    pixelRGB = "rgb(32, 28, 35)";
  }
  if (selected == "rainbow") {
    pixelRGB = null;
  }
});

/**
 * Sets the background color of an HTMLElement to the rgb() string provided or
 * calls rainbowColours.rgb() if rgb is null.
 * @param {HTMLElement} el element to have background color set.
 * @param {string} rgb rgb(x, x, x) to set color.
 */
function setBackgroundColor(el, col) {
  if (col === null) {
    el.style.backgroundColor = rainbowColours.rgb();
  } else {
    el.style.backgroundColor = col;
  }
}

/**
 * Hacky PoS object to handle cycling through rgb values in a rainbow style.
 */
const rainbowColours = {
  red: 255,
  green: 0,
  blue: 0,
  currentDirection: 0,
  currentColor: 0,
  increase: function (col) {
    this[col] = (Math.ceil(this[col] / 64) + 1) * 64 - 1;
    if (this[col] == 255) this.nextInSequence();
  },
  decrease: function (col) {
    this[col] = (Math.ceil(this[col] / 64) - 1) * 64;
    if (this[col] == 0) this.nextInSequence();
  },
  sequence: [
    ["increase", "decrease"],
    ["green", "red", "blue"],
  ],
  nextInSequence: function () {
    this.currentDirection++;
    this.currentColor++;
    if (this.currentDirection == this.sequence[0].length)
      this.currentDirection = 0;
    if (this.currentColor == this.sequence[1].length) this.currentColor = 0;
  },
  rgb: function () {
    const func = [this.sequence[0][this.currentDirection]];
    const arg = [this.sequence[1][this.currentColor]];
    this[func](arg);
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  },
};

// opt toggle event listener
const toggle = document.querySelector("#opt-toggle");
toggle.addEventListener("click", () => {
  const opt = document.querySelector("#opt");
  if (opt.className == "in") {
    setElementClass(opt, "out");
    toggle.innerHTML = "🗙";
  } else if (opt.className == "out") {
    setElementClass(opt, "in");
    toggle.innerHTML = "☰";
  }
});
