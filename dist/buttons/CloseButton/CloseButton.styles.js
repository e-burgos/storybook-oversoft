"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCloseButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledCloseButton = styled_components_1.default.button `
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  border: 0;
`;
