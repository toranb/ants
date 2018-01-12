// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("TodoInput");

function valueFromEvent($$event) {
  return $$event.target.value;
}

function make(onSubmit, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (param) {
      var text = param[/* state */2];
      var reduce = param[/* reduce */1];
      return React.createElement("input", {
                  placeholder: "Write something to do",
                  type: "text",
                  value: text,
                  onKeyDown: (function ($$event) {
                      if ($$event.key === "Enter") {
                        Curry._1(onSubmit, text);
                        return Curry._2(reduce, (function () {
                                      return "";
                                    }), /* () */0);
                      } else {
                        return 0;
                      }
                    }),
                  onChange: Curry._1(reduce, (function ($$event) {
                          return $$event.target.value;
                        }))
                });
    });
  newrecord[/* initialState */10] = (function () {
      return "";
    });
  newrecord[/* reducer */12] = (function (newText, _) {
      return /* Update */Block.__(0, [newText]);
    });
  return newrecord;
}

exports.component      = component;
exports.valueFromEvent = valueFromEvent;
exports.make           = make;
/* component Not a pure module */