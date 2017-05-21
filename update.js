const fs = require('fs');
const http = require('http');
const inquirer = require('inquirer');
const json = require('./package.json');

function updatePackageJson(version) {
  json.version = version;
  fs.writeFileSync('./package.json', JSON.stringify(json, null, 2));
}

function downloadSdk(version) {
  const file = fs.createWriteStream('lib/wix.min.js');
  http.get(`http://static.parastorage.com/services/js-sdk/${version}/js/wix.min.js`, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      updatePackageJson(version);
      console.log(`WixSDK has been updated to version '${version}' successfully.\n`);
    } else {
      console.error(`Required version '${version}' not found.\n`);
    }
  });
}

inquirer.prompt([{
  type: 'input',
  name: 'version',
  message: 'Which version do you want to download? (1.x.0)',
  validate: (value) => {
    if (value.split('.').length === 3) {
      return true;
    }

    return 'Please enter a valid version number in format x.x.x';
  }
}]).then((answers) => {
  downloadSdk(answers.version);
});
