"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.background = exports.neutrals = exports.secondary = exports.primary = exports.colors = void 0;
const primary = {
    red: '#FF3E6C',
    redGradient: `linear-gradient(#FF8CA8,#FF3E6C)`,
    redLight: '#FF3E6C33',
    redExtraLight: '#F8F0F5',
};
exports.primary = primary;
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
exports.secondary = secondary;
const neutrals = {
    black: '#000000',
    blackSixty: '#5F5F79',
    blackThirty: '#88889A',
    white: '#FFFFFF',
};
exports.neutrals = neutrals;
const background = '#F3F5F6';
exports.background = background;
const colors = { primary, secondary, neutrals, background };
exports.colors = colors;
exports.default = colors;
