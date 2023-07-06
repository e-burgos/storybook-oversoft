"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const Header_1 = require("./Header");
const meta = {
    title: 'Tutorial/Header',
    component: Header_1.Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};
exports.default = meta;
exports.LoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};
exports.LoggedOut = {};
