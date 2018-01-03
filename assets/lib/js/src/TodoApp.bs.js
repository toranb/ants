// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List        = require("bs-platform/lib/js/list.js");
var React       = require("react");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("TodoApp");

function str(prim) {
  return prim;
}

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (param) {
      var numItems = List.length(param[/* state */2][/* items */0]);
      return React.createElement("div", {
                  className: "app"
                }, React.createElement("div", {
                      className: "title"
                    }, "What to do"), React.createElement("div", {
                      className: "items"
                    }, "Nothing"), React.createElement("div", {
                      className: "footer"
                    }, Pervasives.string_of_int(numItems) + " items"));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[/* items : :: */[
                /* record */[
                  /* title */"Write some things to do",
                  /* completed : false */0
                ],
                /* [] */0
              ]];
    });
  newrecord[/* reducer */12] = (function (_, _$1) {
      return /* NoUpdate */0;
    });
  return newrecord;
}

exports.component = component;
exports.str       = str;
exports.make      = make;
/* component Not a pure module */
