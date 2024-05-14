
//Exercise One
// TODO: Enable strict mode
"use strict";


//Exercise Two
// TODO: Fix the following parameter list
function parseToJSON(data) {

  //Exercise Three(3)
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON

  try {
    
    return JSON.parse(data); 

  } catch (error) {
    
    // TODO: if an exception is raised
    // print the error to the console
    // and return null

    console.error("Current Error: ", error);
    return null;
  }
   
  
}

//This failData will throw an error cause the data is not a JSON
//Data format to parsed by JSON object to a regular object data
let failData = "<h1>Hello World!</h1>";


//This passData will not throw an error cause the data to be parsed 
//is an object with key-value pair success and true
let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
