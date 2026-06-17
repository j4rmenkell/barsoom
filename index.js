const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  const output_value = `Hello ${nameToGreet}`;
  core.setOutput("greeting", output_value);
} catch (error) {
  core.setFailed(error.message);
}