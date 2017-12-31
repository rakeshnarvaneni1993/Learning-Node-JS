This branch explains the usage of Promises using google and weather APIs

Instructions to use:

1. Download or clone this branch.
2. Navigate to the repo location from command line and run this command: "node app.js --address='YOUR ADDRESS HERE'"
3. The current temperature of that location will be shown on the command line.


About the APP:

1. The main starting file is the app.js file.
2. Both the get-weather-data.js and helper-function.js are imported into app.js
3. Based on the user input, YARGS npm package retrieves the user input.
4. The retrieved address is passed to helper-function.js to get the latitude and longitude of the address from Google API.
5. Google API returns the lat and long of the address entered and they are retrieved in app.js using a call back function.
6. The retrieved coordinates are passed into get-weather-data.js to get the weather of the address.
7. This function returns the current temperature and the data is displayed using a callback function that is passed into the function.
