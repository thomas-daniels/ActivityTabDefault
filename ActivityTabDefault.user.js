// ==UserScript==
// @name        'Activity' tab as default
// @namespace   http://stackexchange.com/users/3094403/programfox
// @author      ProgramFOX
// @description A userscript that automatically shows the Activity tab as default on profile pages
// @include     /^https?:\/\/[a-zA-Z0-9\.]+\.stackexchange\.com\/users\/[0-9]+\/[^?]+$/
// @include     /^https?:\/\/((www|meta)\.)?stackoverflow\.com\/users\/[0-9]+\/[^?]+$/
// @include     /^https?:\/\/((www|meta)\.)?superuser\.com\/users\/[0-9]+\/[^?]+$/
// @include     /^https?:\/\/((www|meta)\.)?serverfault\.com\/users\/[0-9]+\/[^?]+$/
// @include     /^https?:\/\/((www|meta)\.)?askubuntu\.com\/users\/[0-9]+\/[^?]+$/
// @include     /^https?:\/\/((www|meta)\.)?mathoverflow\.net\/users\/[0-9]+\/[^?]+$/
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==

window.location.replace(window.location.href + "?tab=topactivity");
