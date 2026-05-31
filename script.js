const lessons = [
{
word:"Hello",
meaning:"Namaste"
},
{
word:"Thank You",
meaning:"Dhanyavadalu"
},
{
word:"Good Morning",
meaning:"Subhodayam"
},
{
word:"How are you?",
meaning:"Ela unnaru?"
}
];

let savedLesson =
localStorage.getItem("currentLesson");

let index = savedLesson ?
parseInt(savedLesson) : 0;

// Display lesson
function showLesson(){

document.getElementById("word").innerText =
lessons[index].word;

document.getElementById("meaning").innerText =
lessons[index].meaning;

}

// Next button
function nextLesson(){

index++;

if(index >= lessons.length){
index = 0;
}

localStorage.setItem(
"currentLesson",
index
);

showLesson();

}

// Pronunciation
function speakWord(){

let speech =
new SpeechSynthesisUtterance(
lessons[index].word
);

speech.lang = "en-US";

window.speechSynthesis.speak(speech);

}

// First lesson display
showLesson();
function showMeaning(){

document.getElementById("flashcard").innerText =
lessons[index].meaning;

}

function checkAnswer(answer){

if(answer === "Namaste"){
alert("Correct Answer");
}
else{
alert("Wrong Answer");
}

}