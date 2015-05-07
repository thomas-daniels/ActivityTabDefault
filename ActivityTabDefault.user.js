// ==UserScript==
// @name        'Activity' tab as default
// @namespace   http://stackexchange.com/users/3094403/programfox
// @author      ProgramFOX
// @description A userscript that automatically shows the Activity tab as default on profile pages
// @match       *://*.stackexchange.com/users/*
// @match       *://*.stackoverflow.com/users/*
// @match       *://*.superuser.com/users/*
// @match       *://*.serverfault.com/users/*
// @match       *://*.askubuntu.com/users/*
// @match       *://*.mathoverflow.net/users/*
// @match       *://*.stackapps.com/users/*
// @version     1.3
// @grant       none
// @run-at      document-start
// ==/UserScript==

if (!window.location.search &&
    !window.location.hash &&
    !(/\/users\/edit\/|\/login\b/i).test(window.location.pathname)) {
    window.location.replace(window.location.href + "?tab=topactivity");
}
