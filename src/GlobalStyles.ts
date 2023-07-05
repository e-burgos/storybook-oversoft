import { createGlobalStyle, css } from 'styled-components';
import colors from './color-palette';

const Fonts = css`
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

const CssReset = css`
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

/**
 * This function returns an array of css variable declarations using the color palette.
 *
 * @example
 * getColorPalleteCssVariables()  =>  ["--primary-red:#FF3E6C;", "--secondary-yellowGradient:linear-gradient(#F2A73A,#E58616);", "--secondary-yellowLight:#FAB55033;"]
 */
const getColorPalleteCssVariables = () => {
  const colorPalette: string[] = [];
  Object.keys(colors).forEach((type) => {
    if (typeof colors[type as keyof typeof colors] === 'string')
      colorPalette.push('--' + type + ': ' + colors[type as keyof typeof colors] + ';');
    else {
      Object.keys(colors[type as keyof typeof colors]).forEach((color) => {
        const colorType = colors[type as keyof typeof colors];
        colorPalette.push('--' + type + '-' + color + ': ' + colorType[color as keyof typeof colorType] + ';');
      });
    }
  });
  return colorPalette;
};

const GlobalStyles = createGlobalStyle`
  ${Fonts}
  ${CssReset}
  :root{
    ${getColorPalleteCssVariables()}
  }
`;

export default GlobalStyles;
