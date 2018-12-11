    // ==UserScript==
    // @name        Stack Exchange, 'Activity' tab as the default
    // @description A userscript that automatically shows the Activity tab as default on profile pages
    // @match       *://*.askubuntu.com/users/*
    // @match       *://*.mathoverflow.net/users/*
    // @match       *://*.serverfault.com/users/*
    // @match       *://*.stackapps.com/users/*
    // @match       *://*.stackexchange.com/users/*
    // @match       *://*.stackoverflow.com/users/*
    // @match       *://*.superuser.com/users/*
    // @match       *://*.stackoverflow.com/c/*/users/*
    // @exclude     *://*/review
    // @exclude     *://api.stackexchange.com/*
    // @exclude     *://blog.*.com/*
    // @exclude     *://chat.*.com/*
    // @exclude     *://data.stackexchange.com/*
    // @exclude     *://elections.stackexchange.com/*
    // @exclude     *://openid.stackexchange.com/*
    // @exclude     *://stackexchange.com/*
    // @grant       none
    // @run-at      document-start
    // @version     2.0
    // @history     2.0 Added support for Stack Overflow teams
    // @author      ProgramFOX and Brock Adams
    // @homepage    https://stackapps.com/q/6267/7653
    // ==/UserScript==
    /* eslint-disable no-multi-spaces */

    if (    ! location.search   &&
            ! location.hash     &&
            ! /^chat\./.test (location.host)    &&
            ! /\/users\/edit\/|\/login\b|\/flag-summary/.test (location.pathname)
    ) {
        location.replace (location.href + "?tab=topactivity");
    }
