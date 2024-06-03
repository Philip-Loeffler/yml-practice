const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("some error message") this will run the catch clock
  core.debug("debug message");
  core.warning("warning message");
  core.error("error message");

  // core.setSecret(secret)
  const name = core.getInput("who_to_greet");
  console.log(`hello, ${name}`);

  const time = new Date();
  core.setOutput("time", time.toDateString());

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("logging github context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}

// action core package wont exist on the runner machine, because it is installed locally on yours.
// to fix this you need to compile the index file using package 'ncc'
// npm i -g @vercel/ncc
// then run ncc build input.js -o dist
// anytime you change something in your index folder, you will need to redo this command
