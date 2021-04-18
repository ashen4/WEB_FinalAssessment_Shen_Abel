function validate(event) {
  let latitude = document.querySelector("#latitude");
  let longitude = document.querySelector("#longitude");
  let latNum = latitude.value.trim();
  let longNum = longitude.value.trim();
  let latCheck = false;
  let longCheck = true;

  if (latNum < -90 || latNum > 90 || isNaN(latNum)) {
    document.querySelector("#latLabel>span").innerHTML = "";
    document
      .querySelector("#latLabel>span")
      .append("* must be a valid number between -90 and 90");
    latCheck = false;
  } else {
    document.querySelector("#latLabel>span").innerHTML = "";
    latCheck = true;
  }

  if (longNum < -180 || longNum > 180 || isNaN(longNum)) {
    document.querySelector("#longLabel>span").innerHTML = "";
    document
      .querySelector("#longLabel>span")
      .append("* must be a valid number between -180 and 180");
    longCheck = false;
  } else {
    document.querySelector("#longLabel>span").innerHTML = "";
    longCheck = true;
  }

  if (latCheck === false || longCheck === false) {
    event.preventDefault();
    return validate();
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
