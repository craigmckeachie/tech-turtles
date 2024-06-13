"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const prevButtons = document.querySelectorAll(".carouselButton.prev");
  const nextButtons = document.querySelectorAll(".carouselButton.next");

  prevButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const carouselTrack = btn.nextElementSibling;
      const trackWidth = carouselTrack.clientWidth;
      carouselTrack.style.transform = `translateX(${trackWidth}px)`;
    });
  });

  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const carouselTrack = btn.previousElementSibling;
      const trackWidth = carouselTrack.clientWidth;
      carouselTrack.style.transform = `translateX(-${trackWidth}px)`;
    });
  });
});
