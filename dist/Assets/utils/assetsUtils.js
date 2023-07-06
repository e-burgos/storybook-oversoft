"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgColorDefault = exports.assetArray = void 0;
const color_palette_1 = __importDefault(require("../../color-palette"));
exports.assetArray = ['RightArrow', 'LeftArrow', 'Spinner', 'Users'];
const bgColorDefault = (asset) => {
    let color = color_palette_1.default.background;
    if (asset === 'Users')
        color = color_palette_1.default.secondary.greenLight;
    if (asset === 'Spinner')
        color = color_palette_1.default.secondary.yellowLight;
    return color;
};
exports.bgColorDefault = bgColorDefault;
