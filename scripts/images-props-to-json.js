const { exec } = require('child_process');

// Replace 'your-python-script.py' with the actual name of your Python script
const pythonScriptPath = 'scripts/images-props-to-json.py';

// Additional arguments to pass to the Python script
const additionalArgs = ['arg1', 'arg2'];

// Command to run the Python script
const command = `python ${pythonScriptPath} ${additionalArgs.join(' ')}`;

// Function to run a command
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing command: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Main function
async function main() {
  try {
    const result = await runCommand(command);
    console.log('Python script executed successfully:');
    console.log(result);
  } catch (error) {
    console.error('Error executing Python script:');
    console.error(error);
    // Terminate the script with a non-zero exit code
    process.exit(1);
  }
}

// Run the main function
main();
