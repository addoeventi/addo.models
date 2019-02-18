"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_guid_1 = require("ts-guid");
var Reservation = /** @class */ (function () {
    function Reservation() {
        this.guid = ts_guid_1.newGuid();
    }
    return Reservation;
}());
exports.Reservation = Reservation;
