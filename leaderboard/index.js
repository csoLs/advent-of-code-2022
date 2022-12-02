"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var chalk_1 = __importDefault(require("chalk"));
var data_2022_json_1 = __importDefault(require("./data.2022.json"));
var PRINT_TIME_TO_BOTH = true;
var renderFat = function (string, day, offset) { return 25 + offset >= day ? chalk_1["default"].bold(string) : chalk_1["default"].dim(string); };
var renderYearHeader = function (year) {
    var padding = '          ';
    console.log(chalk_1["default"].bold.gray.bgYellowBright("".concat(padding).concat(padding).concat(padding, "Leaderboard for AoC ").concat(year).concat(padding).concat(padding).concat(padding)));
    var oneDay = 60 * 60 * 24 * 1000;
    var today = new Date().valueOf();
    var lastDay = new Date().setFullYear(year, 11, 25);
    var offset = Math.ceil((today - lastDay) / oneDay);
    console.log("\n".concat(padding, "                  ").concat(renderFat('1', 10, offset), " ").concat(renderFat('1', 11, offset), " ").concat(renderFat('1', 12, offset), " ").concat(renderFat('1', 13, offset), " ").concat(renderFat('1', 14, offset), " ").concat(renderFat('1', 15, offset), " ").concat(renderFat('1', 16, offset), " ").concat(renderFat('1', 17, offset), " ").concat(renderFat('1', 18, offset), " ").concat(renderFat('1', 19, offset), " ").concat(renderFat('2', 20, offset), " ").concat(renderFat('2', 21, offset), " ").concat(renderFat('2', 22, offset), " ").concat(renderFat('2', 23, offset), " ").concat(renderFat('2', 24, offset), " ").concat(renderFat('2', 25, offset), "\n").concat(padding).concat(renderFat('1', 1, offset), " ").concat(renderFat('2', 2, offset), " ").concat(renderFat('3', 3, offset), " ").concat(renderFat('4', 4, offset), " ").concat(renderFat('5', 5, offset), " ").concat(renderFat('6', 6, offset), " ").concat(renderFat('7', 7, offset), " ").concat(renderFat('8', 8, offset), " ").concat(renderFat('9', 9, offset), " ").concat(renderFat('0', 10, offset), " ").concat(renderFat('1', 11, offset), " ").concat(renderFat('2', 12, offset), " ").concat(renderFat('3', 13, offset), " ").concat(renderFat('4', 14, offset), " ").concat(renderFat('5', 15, offset), " ").concat(renderFat('6', 16, offset), " ").concat(renderFat('7', 17, offset), " ").concat(renderFat('8', 18, offset), " ").concat(renderFat('9', 19, offset), " ").concat(renderFat('0', 20, offset), " ").concat(renderFat('1', 21, offset), " ").concat(renderFat('2', 22, offset), " ").concat(renderFat('3', 23, offset), " ").concat(renderFat('4', 24, offset), " ").concat(renderFat('5', 25, offset), "\n  "));
};
var renderUser = function (name, score, stars, place) {
    var padPlace = place >= 100 ? 0 : place >= 10 ? 1 : 2;
    var padScore = score >= 1000 ? 0 : score >= 100 ? 1 : score >= 10 ? 2 : 3;
    console.log(chalk_1["default"].bold("".concat(' '.repeat(padPlace)).concat(place, ") ").concat(' '.repeat(padScore)).concat(score, " ")) + chalk_1["default"].yellow("".concat(stars.map(function (s) { return s.pt2 ? '★' : s.pt1 ? '☆' : ' '; }).join(' '), " ")) + name);
    if (PRINT_TIME_TO_BOTH)
        console.log(stars.map(function (_a, i) {
            var time = _a.time;
            return time ? chalk_1["default"].dim("Time to both on day ".concat(' '.repeat(i < 9 ? 1 : 0)).concat(i + 1, ": ")) + time : undefined;
        }).filter(Boolean).join('\n'));
};
var printData = function (data) {
    var year = parseInt(data.event, 10);
    renderYearHeader(year);
    Object.values(data.members)
        .sort(function (a, b) { return b.local_score - a.local_score; })
        .map(function (member, i) {
        var days = Array.from({ length: 25 }, function () { return ({ pt1: false, pt2: false, time: undefined }); });
        Object.entries(member.completion_day_level).map(function (_a) {
            var _b;
            var day = _a[0], data = _a[1];
            var timeForBoth = ((_b = data['2']) === null || _b === void 0 ? void 0 : _b.get_star_ts) ? data['2'].get_star_ts - data['1'].get_star_ts : undefined;
            var printTime = timeForBoth ? new Date(timeForBoth * 1000).toISOString().substr(11, 8) : undefined;
            days[parseInt(day, 10) - 1] = {
                pt1: true,
                pt2: !!timeForBoth,
                time: printTime
            };
        });
        renderUser(member.name || "Anonymous user #".concat(member.id), member.stars, days, i + 1);
    });
};
printData(data_2022_json_1["default"]);
exports["default"] = printData;
