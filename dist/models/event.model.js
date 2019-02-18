"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_guid_1 = require("ts-guid");
var Event = /** @class */ (function () {
    function Event() {
        this.guid = ts_guid_1.newGuid();
        this.tags = [];
    }
    return Event;
}());
exports.Event = Event;
