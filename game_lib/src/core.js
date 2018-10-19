import {BaseTemplate} from "./template/base";

var SethGameLib = {};

const WRAPPER_ID = "#gameboard";

SethGameLib.init = function () {
    // render base template first
    renderTemplate();

    // init game
};

var renderTemplate = function () {
    $(WRAPPER_ID).html(BaseTemplate);
};

export {
    SethGameLib
}