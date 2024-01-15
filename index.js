"use strict";
var config;
(function (config) {
    config.container = document.querySelector(".app");
    config.colors = [100, 200, 400, 700, 900];
})(config || (config = {}));
var utils;
(function (utils) {
    utils.createBox = function (clr) {
        var _a;
        var div = document.createElement("div");
        div.classList.add("box");
        div.classList.add("fill_primary__".concat(clr));
        (_a = config.container) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    };
})(utils || (utils = {}));
var index;
(function (index) {
    config.colors.forEach(function (clr) { return utils.createBox(clr); });
})(index || (index = {}));
//# sourceMappingURL=index.js.map