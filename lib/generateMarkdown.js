// function to generate markdown for README
function generateMarkdown(data) {
    
    let markdownData = {};
    markdownData[1] = `# ${data.title}`;
    markdownData[2] = `![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
    markdownData[3] = `## Description \n\n ${data.description}`;
    markdownData[4] = `## Table of Content \n\n * [Installation](#installation) \n\n * [Usage](#usage) \n\n * [License](#license) \n\n * [Contributing](#contributing) \n\n * [tests](#tests) \n\n  * [Questions](#questions) \n\n`;

    markdownData[5] = `## Installation \n\n To install necessery dependencies, run the following command:  \n\n \`\`\`${data.cmd_dependency}\`\`\` `;

    markdownData[6] = `## Usage \n\n ${data.repo_use}`;
    markdownData[7] = `## License \n\n This project licensed under ${data.license} license`;
    markdownData[8] = `## Contributing \n\n ${data.repo_contrib}`;
    markdownData[9] = `## Tests \n\n To run tests, run the following command: \n\n \`\`\`${data.cmd_test}\`\`\``;
    markdownData[10] = `## Questions \n\n if you have any questions about the repo, open an issue or contact me directly at ${data.email_address}. You can find more of my work at [${data.github_username}](https://github.com/${data.github_username}) `;

    return markdownData;
  }
  
  module.exports = generateMarkdown;
  