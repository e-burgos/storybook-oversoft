"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CloseButton_styles_1 = require("./CloseButton.styles");
const CloseButton = ({ onClick: clickHandler, 'aria-label': ariaLabel }) => {
    return (react_1.default.createElement(CloseButton_styles_1.StyledCloseButton, { "data-testid": "ModalCloseButton", "aria-label": ariaLabel ? ariaLabel : 'Cerrar', onClick: clickHandler },
        react_1.default.createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("line", { x1: "19.5356", y1: "12.4645", x2: "12.4646", y2: "19.5355", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }),
            react_1.default.createElement("line", { x1: "12.4645", y1: "12.4645", x2: "19.5356", y2: "19.5355", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }),
            react_1.default.createElement("rect", { x: "0.5", y: "0.5", width: "31", height: "31", rx: "15.5", stroke: "#EEEEEE" }))));
};
exports.default = CloseButton;
