"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCircle = exports.StyledSpinner = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const IconAttrs_styles_1 = __importDefault(require("../utils/IconAttrs.styles"));
exports.StyledSpinner = (0, styled_components_1.default)(IconAttrs_styles_1.default) `
  margin: ${(props) => props.margin};
  animation: rotate 2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
exports.StyledCircle = styled_components_1.default.circle `
  stroke: ${(props) => props.color};
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
`;
