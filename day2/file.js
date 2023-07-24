// every method in the nodejs 'fs' module has a SYNC and ASYNC method
const fs = require('fs');

//Reading the file
//ASYNC
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
});
//SYNC
const data = fs.readFileSync('text.txt');
console.log(data, data.toString());

//Writing in the file
fs.writeFile('text.txt', 'Its a new Data !', (err) => {
    if(err)
        console.log('Error Occured!');
    else
    console.log('Written SuccessFully! ');
});

//Appending the text
fs.appendFile('text.txt', ', This is Appended Data.', (err) => {
    if(err)
        console.log('Error Occured !');
    else
        console.log('Data appended successfully');
});

//Deleting the File
fs.unlink('./text.txt', (err) => {
    if(err)
        console.log('Error Occured !');
    else
        console.log('File Deleted successfully!');
});
