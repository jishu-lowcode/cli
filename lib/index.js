"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const package_json_1 = (0, tslib_1.__importDefault)(require("../package.json"));
const commander_1 = require("commander");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const program = new commander_1.Command();
program.option('-v, --version', 'print version info');
program.parse(process.argv);
const options = program.opts();
if (options.version) {
    console.log(chalk_1.default.gray(`jishu-cli ${package_json_1.default.version}`));
}
