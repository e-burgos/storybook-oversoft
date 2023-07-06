"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedIn = exports.LoggedOut = void 0;
const testing_library_1 = require("@storybook/testing-library");
const Page_1 = require("./Page");
const meta = {
    title: 'Tutorial/Page',
    component: Page_1.Page,
    parameters: {
        layout: 'fullscreen',
    },
};
exports.default = meta;
exports.LoggedOut = {};
exports.LoggedIn = {
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = (0, testing_library_1.within)(canvasElement);
        const loginButton = yield canvas.getByRole('button', {
            name: /Log in/i,
        });
        yield testing_library_1.userEvent.click(loginButton);
    }),
};
