"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("firebase"));
const path = require("path");
const { promises: fs } = require("fs");
if (firebase_1.default) {
    console.log("firebase is found");
}
