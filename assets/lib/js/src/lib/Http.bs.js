// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Fetch = require("bs-fetch/lib/js/src/Fetch.js");

function get(url) {
  return fetch(url).then((function (prim) {
                return prim.json();
              }));
}

function post(url) {
  return fetch(url, Fetch.RequestInit[/* make */0](/* Some */[/* Post */2], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0)).then((function (prim) {
                return prim.json();
              }));
}

function put(url, body) {
  return fetch(url, Fetch.RequestInit[/* make */0](/* Some */[/* Put */3], /* None */0, /* Some */[body], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0)).then((function (prim) {
                return prim.json();
              }));
}

function $$delete(url, body) {
  return fetch(url, Fetch.RequestInit[/* make */0](/* Some */[/* Delete */4], /* None */0, /* Some */[body], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0)).then((function (prim) {
                return prim.json();
              }));
}

exports.get      = get;
exports.post     = post;
exports.put      = put;
exports.$$delete = $$delete;
/* No side effect */
