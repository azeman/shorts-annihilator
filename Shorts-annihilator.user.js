// ==UserScript==
// @name         shorts-annihilator
// @namespace    https://github.com/azeman/shorts-annihilator/
// @version      1
// @description  Better, less-toxic Youtube Shorts
// @match        *://www.youtube.com/shorts/*
// @grant        none
// @license      GNU 3
// ==/UserScript==

(function() {
    'use strict';

    window.location.replace(window.location.href.replace('www.youtube.com/shorts/', 'youtube.com/v/'));
})();
