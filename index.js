const fs = require('fs');
const readline = require('readline');
const {MyStructure, MyElement} = require("./structures")
const myStructure = new MyStructure();

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });


  for await (const line of rl) {
    const elements = line.split(";");
    let json = elements[1];
    json = JSON.parse(json);
    let myElement = new MyElement(json);
    if(elements[0] === "INSERT"){
        myStructure.add(myElement.name, myElement.dpi, myElement)
    }
    else if (elements[0] === "PATCH"){
        myStructure.update(myElement.name, myElement.dpi, myElement)
    }
    else {
        myStructure.delete(myElement.name, myElement.dpi);
    }
    
  }
}

processLineByLine();