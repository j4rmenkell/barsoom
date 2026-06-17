import * as core from '@actions/core';

const nameToGreet = core.getInput('who-to-greet');
const output_value = `Hello ${nameToGreet}`

core.setOutput ("greeting", output_value)