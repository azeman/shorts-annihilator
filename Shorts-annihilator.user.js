// ==UserScript==
// @name         shorts-annihilator
// @name:fr      shorts-annihilator
// @namespace    https://github.com/azeman/shorts-annihilator/
// @version      1
// @description  Better, less-toxic Youtube Shorts
// @description:fr Pour des Youtube Shorts moins cancérigènes
// @match        *://www.youtube.com/shorts/*
// @grant        none
// @license      GNU 3
// ==/UserScript==

(function() {
    'use strict';

    window.location.replace(window.location.href.replace('www.youtube.com/shorts/', 'youtube.com/v/'));
})();
