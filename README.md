[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# PWA Text Editor

## Description

A text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

## Usage 

Upon opening the application in VSCode a client/server folder structure is present.

![screenshot1](./client/src/images/screenshots/screenshot1.png)

When the text application is run in the terminal the the backend starts and is served to the client, the javascript files are bundled using webpack, and a HTML file, service worker and a manifest file is generated. 

![screenshot2](./client/src/images/screenshots/Screenshot2.png)

![screenshot3](./client/src/images/screenshots/Screenshot3.png)

The application runs without errors while using next-gen javascript and was deployed through Heroku.  If data is entered into the app and the cursor looses focus that data is saved with IndexedDB.  The data in the DB then repopulates the text editor when the page is refreshed. 

![screenhot4](./client/src/images/screenshots/Screenshot4.png)

The app uses a registered service worker.

![sreenshot5](./client/src/images/screenshots/Screenshot5.png)

When the Install button is clicked a prompt asks wether or if you would like to install the app.  When you click on Install in the prompt the app is installed to your computer and functions correctly.

![screenshot6](./client/src/images/screenshots/Screenshot6.png)

![screenshot7](./client/src/images/screenshots/Screenshot7.png)

[Github Repository](https://github.com/KKurzawa/PWA-Text-Editor)

[Demo](https://peaceful-ridge-09824-adb7633d5ee0.herokuapp.com/)



## Credits

n/a

## Questions

[Github Profile](https://github.com/KKurzawa)

Email me at kurzawa1@yahoo.com for questions.

## License

MIT License

Copyright (c) 2023 Kris Kurzawa
