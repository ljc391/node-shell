
var commands = require('./commands.js');
process.stdout.write('prompt >');
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  var arr = cmd.split(' ');
  commands[arr[0]](arr.slice(1));
});



// const fs = require('fs');
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// //console.log(process)
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   var input = cmd.split(" ");
//   if(cmd == 'pwd'){
//     //console.log(process['mainModule']['paths'][0])
//     process.stdout.write(process['mainModule']['paths'][0]);
//     process.stdout.write('\nprompt > ');

//   }else if(cmd == 'date'){
//     var d = new Date()
//     process.stdout.write(d.toString());
//     process.stdout.write('\nprompt > ');
//   }else if(input[0] == 'cat'){
//     fs.readFile(input[1], (err, data) => {
//       if (err) throw err;
//       process.stdout.write(data);
//     });
//   }else if(input[0] == 'head'){
//     fs.readFile(input[1], (err, data) => {
//       if (err) throw err;
//       console.log(data);
//       //process.stdout.write(data);
//     });

//   }

// });