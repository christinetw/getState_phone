const http = require('http');

// Used for testing, would be a function parameter in real world use
const phoneNumber = "4167671111";

// Extract area code and 3 following digits, construct URL
const areaCode = phoneNumber.substring(0, 3);
const nextThree = phoneNumber.substring(3, 6);
const url = `http://www.telcodata.us/query/queryexchangexml.html?npa=${areaCode}&nxx=${nextThree}`;

http.get(url, (resp) => {
  let data = '';

  // Data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Data finished receiving, extract state and print
  resp.on('end', () => {
    // Get the state from the response data
    let idx = data.indexOf("<state>");
    let state = data.substring(idx + 7, idx + 9);

    console.log(`The phone number ${phoneNumber} belongs to the state ${state}`);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
