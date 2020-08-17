// function to generate markdown for README
function generateMarkdown(data) {
    
    return  `# ${data.title} \n\n
![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg) \n\n
## Description \n\n ${data.description} \n\n## Table of Content \n\n 
* [Installation](#installation) \n\n 
* [Usage](#usage) \n\n 
* [License](#license) \n\n 
* [Contributing](#contributing) \n\n 
* [tests](#tests) \n\n  
* [Questions](#questions) \n\n
## Installation \n\n To install necessery dependencies, run the following command:  \n\n \`\`\`${data.cmd_dependency}\`\`\` \n\n
## Usage \n\n ${data.repo_use} \n\n
## License \n\n This project licensed under ${data.license} license \n\n
## Contributing \n\n ${data.repo_contrib} \n\n
## Tests \n\n To run tests, run the following command: \n\n \`\`\`${data.cmd_test}\`\`\` \n\n
## Questions \n\n if you have any questions about the repo, open an issue or contact me directly at ${data.email_address}. You can find more of my work at [${data.github_username}](https://github.com/${data.github_username}) \n\n`
  }
  
  module.exports = generateMarkdown;
  