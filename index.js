var readlineSync = require('readline-sync');
var userName = readlineSync.question("May I have your name");
const chalk = require('chalk');
console.log(chalk.red("Welcome "+userName+ " to do you know Muneeb"))
var score =0;
  var highScores=[{  name: "Muneeb",
    score: 9
  },
  {
    name: "Shakir",
    score: 6
  }];

function play( question, answer){

  var userAnswer=readlineSync.question(question)
   if 
   
     (userAnswer===answer){
   console.log("Right Answer!")
   score=score+1;
   }

   else
   {
   console.log("Wrong Answer!")
   }
   
   console.log("current score", score)
   console.log("-------")
}
 var questionbank = [{
  question: "Where do I live? ",
  answer: "Srinagar"
}, {
  question: "My favorite superhero would be? ",
  answer: "Ironman"
},
{
  question: "What do I do cuurently? ",
  answer: "Student "
}];

  
 for(i=0;i<questionbank.length;i++)
 {
   var currentQuestion =questionbank[i]
   play (currentQuestion.question,currentQuestion.answer)
 }
 console.log("Yay,you scored",score)
