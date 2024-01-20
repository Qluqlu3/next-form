"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var Menu_1 = require("@/app/components/Layouts/Menu");
var Checkbox_1 = require("@/app/components/Checkbox");
var constants_1 = require("@/constants");
exports.Home = function (_a) {
    var temp = _a.temp;
    var _b = react_1.useState(constants_1.CHECK_BOX_LIST), checkedList = _b[0], setCheckedList = _b[1];
    var checkAll = react_1.useCallback(function () {
        setCheckedList(checkedList.map(function (list) { return (__assign(__assign({}, list), { checked: true })); }));
    }, []);
    var checkAllOff = react_1.useCallback(function () {
        setCheckedList(checkedList.map(function (list) { return (__assign(__assign({}, list), { checked: false })); }));
    }, []);
    var handleClickChecked = react_1.useCallback(function (_a) {
        var id = _a.id;
        setCheckedList(function (prevList) { return prevList.map(function (list) { return (list.id === id ? __assign(__assign({}, list), { checked: !list.checked }) : list); }); });
    }, []);
    return (react_1["default"].createElement("div", { className: 'flex flex-col gap-y-8 bg-gray-300 h-screen p-5' },
        react_1["default"].createElement("h1", { className: 'text-5xl font-bold' }, "Home"),
        react_1["default"].createElement(Menu_1["default"], null),
        react_1["default"].createElement("div", { className: 'flex gap-x-3 items-center' },
            react_1["default"].createElement("div", null, "\u6C17\u6E29\uFF1A"),
            react_1["default"].createElement("span", { className: 'block font-semibold text-3xl text-red-600' }, temp),
            react_1["default"].createElement("span", null, "\u00B0C")),
        react_1["default"].createElement("div", { className: 'flex gap-x-5' },
            react_1["default"].createElement("button", { onClick: checkAll, className: 'border py-2 px-3 rounded-lg bg-blue-500 border-blue-500 hover:border-blue-400 hover:bg-blue-400' }, "\u3059\u3079\u3066\u30C1\u30A7\u30C3\u30AF"),
            react_1["default"].createElement("button", { onClick: checkAllOff, className: 'border py-2 px-3 rounded-lg bg-blue-500 border-blue-500 hover:border-blue-400 hover:bg-blue-400' }, "\u3059\u3079\u3066\u30C1\u30A7\u30C3\u30AFOFF")),
        react_1["default"].createElement("div", { className: 'flex gap-2 flex-wrap' }, checkedList.map(function (list) { return (react_1["default"].createElement(Checkbox_1.Checkbox, { id: list.id, label: list.label, checked: list.checked, onClick: handleClickChecked })); }))));
};
