import pkg from "../package.json";
import { createCommand } from "commander";
import chalk from "chalk";

const program = createCommand();

program.version(chalk.gray(`jishu-cli ${pkg.version}`));

program
  .command("build")
  .argument("[path]")
  .description("build project")
  .action(
    (path) => {
      console.log(path);
    },
  );

program.parse(process.argv);
