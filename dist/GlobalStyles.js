"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const color_palette_1 = __importDefault(require("./color-palette"));
const Fonts = (0, styled_components_1.css) `
  @font-face {
    font-family: 'Poppins-Thin';
    font-style: normal;
    font-weight: 100;
    src: url('/assets/fonts/Poppins/Poppins-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-Light';
    font-style: normal;
    font-weight: 300;
    src: url('/assets/fonts/Poppins/Poppins-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-Medium';
    font-style: normal;
    font-weight: 400;
    src: url('/assets/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: 400;
    src: url('/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    font-style: normal;
    font-weight: 700;
    src: url('/assets/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 800;
    src: url('/assets/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-ExtraBold';
    font-style: normal;
    font-weight: 800;
    src: url('/assets/fonts/Poppins/Poppins-ExtraBold.ttf') format('truetype');
  }
`;
const CssReset = (0, styled_components_1.css) `
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
const getColorPalleteCssVariables = () => {
    const colorPalette = [];
    Object.keys(color_palette_1.default).forEach((type) => {
        if (typeof color_palette_1.default[type] === 'string')
            colorPalette.push('--' + type + ': ' + color_palette_1.default[type] + ';');
        else {
            Object.keys(color_palette_1.default[type]).forEach((color) => {
                const colorType = color_palette_1.default[type];
                colorPalette.push('--' + type + '-' + color + ': ' + colorType[color] + ';');
            });
        }
    });
    return colorPalette;
};
const GlobalStyles = (0, styled_components_1.createGlobalStyle) `
  ${Fonts}
  ${CssReset}
  :root{
    ${getColorPalleteCssVariables()}
  }
`;
exports.default = GlobalStyles;
