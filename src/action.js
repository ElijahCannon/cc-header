const core = require("@actions/core");

async function run() {
  const MC_USERNAME = core.getInput("MC_USERNAME");
  const MC_PASSWORD = core.getInput("MC_PASSWORD");

  console.log(MC_USERNAME);
  console.log(MC_PASSWORD);
}

run();
