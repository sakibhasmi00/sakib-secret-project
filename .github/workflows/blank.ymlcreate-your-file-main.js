// create-your-file-main.js

const fs = require('fs');
const path = require('path');

const secretFolder = path.join(__dirname, 'SakibSecretBox');
const welcomeText = `
🔐 Welcome to Sakib Secret 🤫
Your vault has been unlocked.
`;

function createSecretFile() {
  if (!fs.existsSync(secretFolder)) {
    fs.mkdirSync(secretFolder);
    fs.writeFileSync(path.join(secretFolder, 'welcome.txt'), welcomeText);
    console.log('✅ Secret folder created: SakibSecretBox');
    console.log('📄 Welcome file added.');
  } else {
    console.log('⚠️ Secret folder already exists. No action taken.');
  }
}

createSecretFile();
#This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v4

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
