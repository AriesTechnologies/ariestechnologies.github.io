document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Hamburger Menu
   document.querySelector('#menu').addEventListener('click', function () {
      const x = document.getElementById("links");
      if (x.style.display != "none" && x.style.display != "") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
   });

   addEventListener('resize', function () {
      document.getElementById("links").style.removeProperty("display");
   });
});