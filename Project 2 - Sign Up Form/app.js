document.querySelector(".banner-btn").addEventListener("click", () => {
  // hide banner  whne we click on btn
  document.querySelector(".banner").style.display = "none";
  //   display form container
  document.querySelector(".form-container").style.cssText =
    "opacity: 1; visibility: visible";

  // change the background of form-container
  document.querySelector(".container").style.background = "#cc683c";
});

// x-btn exiting
document.querySelector(".x-btn").addEventListener("click", () => {
  // to show the banner when we click on the x-btn
  document.querySelector(".banner").style.display = "flex";
  //   hide form
  document.querySelector(".form-container").style.cssText =
    "opacity: 0; visibility: none;";
  // color hide
  document.querySelector(".container").style.cssText =
    "background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(images/bg1.jpeg) center no-repeat; background-size: cover";
});
