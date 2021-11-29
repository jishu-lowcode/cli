import pkg from "../package.json";
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program.option('-v, --version', 'print version info')

program.parse(process.argv)

const options = program.opts()

if (options.version) {
    console.log(chalk.gray(`jishu-cli ${pkg.version}`))
} 