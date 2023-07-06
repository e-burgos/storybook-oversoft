"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RightArrow_styles_1 = require("./RightArrow.styles");
const RightArrow = ({ size }) => {
    return (react_1.default.createElement(RightArrow_styles_1.StyledSvgRightArrow, { width: size ? size : 45, height: size ? size : 45, viewBox: "0 0 45 45", "data-testid": "RightArrow", fill: "none" },
        react_1.default.createElement("line", { x1: "27.5356", y1: "22.4646", x2: "20.4646", y2: "29.5357", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("line", { x1: "20.4644", y1: "15.4646", x2: "27.5355", y2: "22.5356", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("rect", { x: "0.5", y: "0.5", width: "44", height: "44", rx: "22", stroke: "#EEEEEE" })));
};
exports.default = RightArrow;
