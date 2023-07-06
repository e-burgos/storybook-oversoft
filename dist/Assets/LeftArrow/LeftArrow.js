"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LeftArrow_styles_1 = require("./LeftArrow.styles");
const LeftArrow = ({ size }) => {
    return (react_1.default.createElement(LeftArrow_styles_1.StyledSvgLeftArrow, { width: size ? size : 45, height: size ? size : 45, viewBox: "0 0 45 45", "data-testid": "LeftArrow", fill: "none" },
        react_1.default.createElement("line", { x1: "17.4644", y1: "22.5354", x2: "24.5354", y2: "15.4643", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("line", { x1: "24.5356", y1: "29.5354", x2: "17.4645", y2: "22.4644", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("rect", { x: "44.5", y: "44.5", width: "44", height: "44", rx: "22", transform: "rotate(180 44.5 44.5)", stroke: "#EEEEEE" })));
};
exports.default = LeftArrow;
