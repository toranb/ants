// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var React               = require("react");
var ReasonReact         = require("reason-react/lib/js/src/ReasonReact.js");
var Utils$ReactTemplate = require("../lib/Utils.bs.js");

var component = ReasonReact.statelessComponent("AntIcon");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("span", {
                  className: "icon"
                }, Utils$ReactTemplate.str("🐜"));
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */
