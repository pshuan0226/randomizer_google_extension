var choices = [8,5,3,7,4,23,4,2];
var length = choices.length;
var random;
var text;
text = "<ul>";

for (i = 0; i < length; i++) {
  random = Math.floor(Math.random() * choices.length);
  text += "<li>" + choices[random] + "</li>";
  choices.splice(random,1);
}

document.getElementById("demo").innerHTML = text;
