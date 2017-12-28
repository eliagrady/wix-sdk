const fs = require('fs');
const http = require('http');
const inquirer = require('inquirer');
const json = require('./package.json');
const availableVersions = [
  '1.90.0',
  '1.89.0', '1.87.0', '1.86.0', '1.84.0', '1.83.0', '1.81.0',
  '1.77.0', '1.76.0', '1.75.0', '1.74.0', '1.72.0',
  '1.69.0', '1.68.0', '1.67.0', '1.66.0', '1.65.0', '1.64.0', '1.62.0', '1.61.0',
  '1.52.0', '1.50.0',
  '1.47.0', '1.46.0', '1.45.0'
];

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

const validate = (value) => {
  const version = value.split('.');
  if (version.length === 3 && version[0] >= '1' && version[2] === '0') {
    return true;
  }

  return 'Please enter a valid version number in format x.xx.x';
};

const chooseAutoOrManual = [{
  type: 'list',
  name: 'method',
  message: 'How would you like to choose a Wix SDK version?',
  choices: ['Auto', 'Manual'],
  default: 'Auto'
}];

const auto = [{
  type: 'list',
  name: 'version',
  message: 'Which version do you want to download? (1.xx.0)',
  validate,
  choices: availableVersions,
  default: availableVersions[0]
}];

const manual = [{
  type: 'input',
  name: 'version',
  message: 'Which version do you want to download? (1.xx.0)',
  validate
}];


inquirer.prompt(chooseAutoOrManual)
  .then(((answers) => {
    inquirer.prompt(answers.method === 'Auto' ? auto : manual)
      .then(userSelection => downloadSdk(userSelection.version));
  }));
