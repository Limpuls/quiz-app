// index page with login form
// We launch the app with User constructor which has login info of the user
// Then the user chooses to start the quiz and Quiz constructor launches the quiz with questions and answer options
// So for every new user we create a new instance of User and Quiz constructor object.
let dbtn;
var users = [];
let theQuestion = ["Which one of the three is a programming language: Javascript, HTML, CSS", "ExpressJS is a back end or front end framework?"];
let theChoices = [["Javascript", "HTML", "CSS"], ["Back End", "Front End"]];
let theCorrectAnswer = ["Javascript", "Back End"];
let theName = document.getElementById("user_name");
let theEmail = document.getElementById("user_email");

function User (theName, theEmail) {
  this.name = theName;
  this.email = theEmail;
  this.quizScores = [];
  //this.currentScore = 0;
}


function Question (theQuestion, theChoices, theCorrectAnswer) {
  this.Question = theQuestion;
  this.theChoices = theChoices;
  this.theCorrectAnswer = theCorrectAnswer;
  this.currentQuestion = 0;
  this.theChoices = 0;
}

var btn = document.getElementById("button");
btn.addEventListener("click", function(e) {
  document.getElementsByTagName("form")[0].style.display = "none";
  dbtn = document.createElement("BUTTON");
  dbtn.innerHTML = "Next";
  document.getElementsByTagName("p")[0].innerHTML = theQuestion[0];
  var radio = document.createElement("input");
  radio.type = "radio";

  //document.getElementById("options").appendChild(radio);
  //var kazkas = document.getElementById("options").innerHTML = theChoices[0];



  var user1 = new User (theName.value, theEmail.value);
  var question1 = new Question (theQuestion, theChoices);
  var list = document.createElement("LI");
  var listOptions = document.getElementById("options").appendChild(list);
  //listOptions.appendChild(radio);
  //listOptions[0].appendChild(theChoices[question1.theChoices]);\

  /*var arrayQ = document.createElement("p");
  arrayQ.innerHTML = theChoices[question1.theChoices];
  list.appendChild(arrayQ);*/


  for (var i = 0; i < theChoices[question1.theChoices].length; i++) {

    var arrayQ = document.createElement("p");
    arrayQ.innerHTML = theChoices[question1.theChoices][i];
    list.appendChild(arrayQ);

    var radio = document.createElement("input");
    radio.type = "radio";
    listOptions.appendChild(radio);

    dbtn.addEventListener("click", function() {
        //list.removeChild(arrayQ);
        //listOptions.removeChild
        list.removeChild(list.firstChild);
        list.removeChild(list.lastChild);
      })
  }
  //list.appendChild(question1.theChoices);
  document.getElementById("container").appendChild(dbtn);

  dbtn.addEventListener("click", function() {




    question1.currentQuestion++;
    question1.theChoices++;
    theQuestion[question1.currentQuestion];
    theChoices[question1.theChoices];

    document.getElementsByTagName("p")[0].innerHTML = theQuestion[question1.currentQuestion];
    //var options = document.getElementById("options").innerHTML = theChoices[question1.theChoices];
    for (var i = 0; i < theChoices[question1.theChoices].length; i++) {
      var arrayQ = document.createElement("p");
      arrayQ.innerHTML = theChoices[question1.theChoices][i];
      list.appendChild(arrayQ);

      var radio = document.createElement("input");
      radio.type = "radio";
      listOptions.appendChild(radio);
    }

  });
  var node = document.createElement("LI");
  var li = document.getElementById("options").appendChild(node);

  /*for (var i = 0; i < theChoices.length; i++) {
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choices";
    radio.class = "radioButtons";
    radio.value = i;
    radio.id = "choice" + i;
    var radioText = document.createElement("div");
    radioText.id = "c" + i;
    radioText.class = "choiceText";
    radioText.innerHTML = theChoices[question1.theChoices]; //|| theQuestion[question1.currentQuestion];

radioText.appendChild(radio);
li.appendChild(radioText);
}*/
  console.log(question1);
  console.log(user1);
});



/*

User.prototype = {
  constructor: User,
  saveScore: function (theScoreToAdd) {
    this.quizScores.push(theScoreToAdd);
  },
  showNameAndScore: function () {
    var Score = this.quizScores.length > 0 ? this.quizScores.join(",") : "No scores yet";
    return this.name + "score is " + Score;
  },
  changeEmail: function (newEmail) {
    this.email = newEmail;
    return "new email saved:" + this.email;
  }
}

function inheritPrototype (childObject, parentObject) {
  var copyOfParent = Object.create(parentObject.prototype);
  copyOfParent.constructor = childObject;
  childObject.prototype = copyOfParent;
}

function Question (theQuestion, theChoices, theCorrectAnswer) {
  this.question = theQuestion;
  this.choices = theChoices;
  this.correctAnswer = theCorrectAnswer;
  this.UserAnswer = "";
  var newDate = new Date();
  QUIZ_CREATED_DATE = newDate.toLocaleDateString();
  this.getQuizDate = function () {
        return QUIZ_CREATED_DATE;
    };
}

var quest = new Question;

Question.prototype.getCorrectAnswer = function () {
  return this.correctAnswer;
}

Question.prototype.getUserAnswer = function () {
  return this.UserAnswer;
}

Question.prototype.displayQuestion = function () {
  var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
  choiceCounter = 0;

  this.choices.forEach(function (eachChoice) {
  questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
    choiceCounter++;
  });
  questionToDisplay += "</ul>";
  console.log (questionToDisplay);
}

function MultipleChoiceQuestion (theQuestion, theChoices, theCorrectAnswer) {
  Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};

inheritPrototype(MultipleChoiceQuestion, Question);

var allQuestions = [

  new MultipleChoiceQuestion("who is prime minister of england?", ["Obama", "Blair"], 3)

];

allQuestions.forEach(function (eachQuestion)  {
    eachQuestion.displayQuestion();
});

function Quiz (User, Question) {
  this.user = User;
  this.question = Question;
}

var quiz = new Quiz;

//when user creates an account, there should be created a new Quiz instance, which will launch the quiz for individual
//user. I think Quiz constructor should have subclasses like user and questions.

Quiz.prototype.constructor = Quiz;

Quiz.prototype.clickBtn = function () {
      if (theName.value == "") {
        var message = document.createElement("p");
        message.className = "message";
        message.innerHTML = "You forgot the name and email";
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(message);
      } else {
        var message = document.getElementsByClassName("message")[0]; // first one
        message.parentNode.removeChild(message);
        var user1 = new User (theName.value, theEmail.value);
        users.push(user1);
        console.log("Quiz Created On: " + this.getQuizDate);
        console.log(JSON.stringify(users, null, 2));
      }
      theName.value = "";
      theEmail.value = "";
}

var btn = document.getElementById("button");
btn.addEventListener("click", quiz.clickBtn);


Quiz.prototype.conditional = function () {
  if (this.name = theName) {
    console.log(User);
  } else {
    console.log("Please type your name and email");
  }
}

function clickBtn() {
  var btn = document.getElementById("button");
  btn.addEventListener("click", function () {
    if (theName.value == "") {
      var message = document.createElement("p");
      message.className = "message";
      message.innerHTML = "You forgot the name and email";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(message);
    } else {
      var message = document.getElementsByClassName("message")[0]; // first one
      message.parentNode.removeChild(message);
      console.log(message);
      var user1 = new User (theName.value, theEmail.value);
      users.push(user1);
      console.log("Quiz Created On: " + this.getQuizDate);
      console.log(JSON.stringify(users, null, 2));
    }
    theName.value = "";
    theEmail.value = "";
  });
}
clickBtn();
*/
