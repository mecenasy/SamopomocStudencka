var fs = require('fs');

fs.appendFile(__dirname + '/Files/' + 'mynewfile1.txt', 'Hello content!', (err) => {
   console.log('__dirname', __dirname);
   if (err) throw err;
   console.log('Saved!');
});

fs.open('mynewfile2.txt', 'a+', function (err, file) {
	console.log("TCL: file", file)
   if (err) throw err;
   console.log('Saved!');
});
