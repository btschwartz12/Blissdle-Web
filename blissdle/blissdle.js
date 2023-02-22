#!javascript
// import require from 'require.js'

function process() {
   let entry = document.getElementById('entry').value
   let results = document.getElementById('results').value

   document.getElementById("output").innerHTML = `entry: ${entry} results: ${entry} piper sucks` ;
} 
document.getElementById('processButton').addEventListener("click", process)
 
// properties
var words = new Set();
const textarea = document.getElementById("textArea")
textarea.value += 'pippy\n'

// code to run
// load_file()


// functions
function load_file() {
   textarea.value += 'attempting load\n'
   var fs = require('fs');
   textarea.value += 'pips\n'
   var array = []
   
   try {
      fs.readFile('test.txt', function (err, logData) {
         if (err) throw err;
         let str = logData.toString();
         array = str.trim().split('\n');
         words = array;
         textarea.value += 'loaded\n'
   
         parse_file()
         
      });
   } catch (error) {
      textarea.value += 'error\n'
      textarea.value += error.toString()
   }
   
   
}

function parse_file() {

   words.add("piper")
   words.add("rowdy")
   words.add("dogs")
   
   for (let word of words) {
      textarea.value += word + '\n'
   }  
}

// HERE: need to find a way for require to work will debugging

document.getElementById('fileButton').addEventListener("click", load_file)
// document.getElementById('fileButton').addEventListener("click", parse_file)

document.getElementById('clearButton').addEventListener("click", function() {
   textarea.value = ''
})

