const primary = {
  red: '#D41F34',
  redGradient: `linear-gradient(#D41F3450,#D41F34)`,
  redLight: '#D41F3450',
  redExtraLight: '#D41F3433',
};

const secondary = {
  yellow: '#FAB550',
  yellowGradient: 'linear-gradient(#F2A73A,#E58616)',
  yellowLight: '#FAB55033',
  green: '#1ECE7C',
  greenGradient: 'linear-gradient(#1ECE7C,#21AB6B)',
  greenLight: '#1ECE7C33',
  blue: '#6889FF',
  blueGradient: 'linear-gradient(#6889FF,#2E40E2)',
  blueLight: '#6889FF33',
  violet: '#8D52ED',
  violetGradient: 'linear-gradient(#A87BF0,#7C39EB)',
  violetLight: '#8D52ED33',
};

const neutrals = {
  black: '#000000',
  greyOne: '#333333',
  greyTwo: '#666666',
  greyThree: '#9D9D9D',
  greyLight: '#FAFAFA',
  greyBorder: '#E0E0E0',
  white: '#FFFFFF',
};

const background = '#FAFAFA';

const colors = { primary, secondary, neutrals, background };

export { colors, primary, secondary, neutrals, background };
export default colors;
