// ==UserScript==
// @name            Kicktipp Custom CSS
// @namespace       https://openuserjs.org/users/koelle25
// @version         1.0.0
// @description     Making the Website of Kicktipp less eye-straining
// @icon            https://icons.duckduckgo.com/ip2/kicktipp.de.ico
// @author          koelle25
// @copyright       2021, koelle25 (https://openuserjs.org/users/koelle25)
// @license         MIT
// @match           https://www.kicktipp.de/*
// @downloadURL     https://github.com/koelle25/userscripts/raw/main/kicktipp-custom-css.user.js
// @homepageURL     https://github.com/koelle25/userscripts
// @supportURL      https://github.com/koelle25/userscripts/issues
// @contributionURL https://github.com/koelle25/userscripts/pulls
// @updateURL       https://openuserjs.org/meta/koelle25/Kicktipp_Custom_CSS.meta.js
// @grant           none
// ==/UserScript==

(function() {
  'use strict';

  let wbWrapper = document.getElementById("wbwrapper");
  let pageWrapper = document.getElementById("pagewrapper");
  let topBar = document.getElementById("topbar");
  let pageTitles = document.getElementsByClassName("pagetitle");
  let tbWrapper = document.createElement("div");
  let footerTail = document.getElementById("footer-tail");

  // Stretch the page over full width
  document.getElementsByTagName("body")[0].style = "width: 100%; background-color: white;";
  if (wbWrapper) {
    wbWrapper.style = "width: 100%;";
  }
  if (pageWrapper) {
    pageWrapper.style = "width: 100%;";
  }

  // Remove empty space below footer
  if (footerTail) {
    footerTail.style = "display: none;";
  }

  // Remove the awkward empty space between left sidebar and pagetitle
  if (pageTitles.length > 0) {
    pageTitles[0].style = "margin-left: -1em; padding-left: 1em;";
  }

  // Make the topbar (containing Logo and Login/Logout button etc) centered
  if (topBar && tbWrapper && pageWrapper) {
    topBar.style = "max-width: 800px; margin: 0 auto 0 180px;";

    tbWrapper.style = "background-color: #C01C00;";
    tbWrapper.appendChild(topBar);

    pageWrapper.prepend(tbWrapper);
  }
})();
