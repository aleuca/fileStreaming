const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const { join } = require('path');
let PDFDocument = require ('pdfkit');
let contents;

doc = new PDFDocument
doc.pipe 


let currentDirectory = path.join(__dirname, 'testDirectory');
const destinationFile = path.join(__dirname, 'test.txt');

// reads files appends them to create a string and sends them to a destination in string form
// next step is to find a way to encode it into pdf
// also need a way to create the text.txt file without hardcoding
function readAppend(directory, destination) {
   
    // if(fs.lstatSync(directory).isDirectory()) {
    //     directory = fs.readdirSync(directory)
    //         .map(name => join(directory, name)).filter(isDirectory)
    //     return readAppend(directory, destinationFile)
    // }
    
    return fs.readdirAsync(directory)
        .map(file => fs.readFileAsync(path.join(directory, file), 'utf8'))
        .then(contents => fs.writeFileAsync(destination, contents.join('\n')))
        
}

contents = readAppend(currentDirectory, destinationFile);


