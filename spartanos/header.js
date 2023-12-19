document.write(`
   <header>
      <div class='navigation'>
         <a href="javascript:void(0);" id="menu" class="icon">
            <i class="fa fa-bars"></i>
         </a>
         <div id="links">
            <img id="nav-img" src='../Images/icons/SpartanOS.png' onclick="window.location.href='home.html'"/>
            <img src='../Images/icons/SpartanOS.png' onclick="window.location.href='home.html'"/>
            <a href='versions.html'>VERSIONS</a>
            <a href='docs.html'>DOCS</a>
            <a href='../store/spartanos.html'>STORE</a>
            <a href='support.html'>SUPPORT</a>
            <button id='theme' type='button'></button>
         </div>
      </div>
   </header>
   `);

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

      let themeNum = 10;
      const themeNames = [
         // 'Light',
         'Clouds',
         'London',
         'Adobe',
         'Sunset',
         'Gold',
         'Daylight',
         'Mint',
         'Palm',
         'Sea',
         'Bluejay',
         'Future',
         'Orchid',
         'Lavender',
         'Cozy',
         'Dark',
      ];
      const themes = [
         // '(210,210,210,255)', //Almost White
         '(200,200,200,255)', //Light Grey
         '(105,0, 41, 255)', //Maroon
         '(125,47,48, 255)', //Adobe Brick
         '(210,118,78,255)', //Peach
         '(128,113,72,255)', //Gold
         '(237,203,96,255)', //Light Yellow
         '(131,208,112,255)', //Mint Green
         '(61,91,89,255)', //Palm Leaf Green
         '(42,161,152,255)', //Teal
         '(68,103,145,255)', //Blue Jay
         '(0,43,54,255)', //Dark Teal
         '(218, 112, 214,255)', //Orchid Purple
         '(128,128,255,255)', //Light Purple
         '(115,115,115,255)', //Mid Grey
         '(30,30,30,255)', //Almost Black
      ];
   
      const changeTheme = function (num) {
         themeNum += 1;
         if (themeNum >= themes.length) {
            themeNum = 0;
         }
   
         localStorage.setItem('theme', themeNum);
   
         const theme = "rgb"+themes[themeNum];
         const themeBtn = document.getElementById("theme");

         themeBtn.textContent = themeNames[themeNum];
         document.querySelectorAll('button').forEach( function (item) {
            item.style.background = theme;
         });
      };

      if (localStorage.getItem('theme') === null) {
         themeNum = 10;
         console.log(themeNum);
      } else {
         console.log(localStorage.getItem('theme'));
         themeNum = parseInt(localStorage.getItem('theme'));
      }

      const themeBtn = document.getElementById("theme");
   
      themeBtn.addEventListener('click', function () {
         changeTheme(themeNum);
      });
   
      themeNum -= 1;
      changeTheme(themeNum);
   });