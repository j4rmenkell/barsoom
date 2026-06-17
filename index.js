import * as core from '@actions/core';
import * as core from '@actions/github';


try {
const nameToGreet = core.getInput('who-to-greet');
const output_value = `Hello ${nameToGreet}` 
core.setOutput ("greeting", output_value)

} catch (error) {
    core.setFailed(error.message);
}