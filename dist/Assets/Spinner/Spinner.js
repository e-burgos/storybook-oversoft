"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Spinner_styles_1 = require("./Spinner.styles");
const color_palette_1 = __importDefault(require("../../color-palette"));
const react_1 = __importDefault(require("react"));
const Spinner = ({ size, iconColor, margin }) => {
    return (react_1.default.createElement(Spinner_styles_1.StyledSpinner, { viewBox: "0 0 50 50", width: size ? size : 26, height: size ? size : 26, "data-testid": "Spinner", margin: margin ? margin : '0px' },
        react_1.default.createElement(Spinner_styles_1.StyledCircle, { "data-testid": "Circle", color: iconColor ? iconColor : color_palette_1.default.primary.red, cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "6" })));
};
exports.default = Spinner;
